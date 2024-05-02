import {defineStore} from "pinia";
import axios from "@/config/axios/index.js";

const useProductsStore = defineStore('products', () => {

    const fetchProducts = (setIsFetched, setProducts, setError) => {
        setIsFetched(false);
        axios
            .get("products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                setError(err?.message);
            })
            .finally(() => {
                setIsFetched(true);
            });
    };

    const fetchProductById = (id, setIsFetched, setProduct, setError) => {
        setIsFetched(false);
        axios
            .get(`products/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                setError(err?.message);
            })
            .finally(() => {
                setIsFetched(true);
            });
    }

    return {
        fetchProducts,
        fetchProductById,
    };
});

export default useProductsStore;