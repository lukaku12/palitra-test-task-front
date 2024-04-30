import {defineStore} from "pinia";
import useRef from "@/composables/hooks/useRef.js";
import axios from "@/config/axios/index.js";

const useProductsStore = defineStore('products', () => {
    const [isFetched, setIsFetched] = useRef(false);
    const [products, setProducts] = useRef([]);
    const [cart, setCart] = useRef([]);

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
        // add product to cart
        setCart([...cart.value, product]);
    }

    return {
        cart,
        products,
        isFetched,
        fetchProducts,
        addProductToCart,
    };
});

export default useProductsStore;