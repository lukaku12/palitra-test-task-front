import {defineStore} from "pinia";
import useRef from "@/composables/hooks/useRef.js";
import axios from "@/config/axios/index.js";
import useLocalStorage from "@/composables/hooks/useLocalStorage.js";

const useProductsStore = defineStore('products', () => {
    const lStorage = useLocalStorage('cart', []);

    const [isFetched, setIsFetched] = useRef(false);
    const [products, setProducts] = useRef([]);
    const [cart, setCart] = useRef(lStorage.getValue());


    const fetchProducts = () => {
        setIsFetched(false);
        axios
            .get("products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setIsFetched(true);
            });
    };

    const addProductToCart = (product) => {
        setCart([...cart.value, product]);
        lStorage.setValue(cart.value);
    }

    const getCart = () => {
        return {
            cart: cart.value,
            total: cart.value.reduce((acc, product) => acc + product.price, 0),
            totalItems: cart.value.length,
        };
    }

    return {
        cart,
        products,
        isFetched,
        getCart,
        fetchProducts,
        addProductToCart,
    };
});

export default useProductsStore;