import {defineStore} from "pinia";
import useRef from "@/composables/hooks/useRef.js";
import axios from "@/config/axios/index.js";

const useProductsStore = defineStore('products', () => {
    const [isFetched, setIsFetched] = useRef(false);
    const [products, setProducts] = useRef([]);
    const [product, setProduct] = useRef([]);

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

    const fetchProductById = (id) => {
        setIsFetched(false);
        axios
            .get(`products/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setIsFetched(true);
            });
    }

    return {
        product,
        products,
        isFetched,
        fetchProducts,
        fetchProductById,
    };
});

export default useProductsStore;