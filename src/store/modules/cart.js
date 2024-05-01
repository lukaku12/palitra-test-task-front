import {defineStore} from "pinia";
import useRef from "@/composables/hooks/useRef.js";
import useLocalStorage from "@/composables/hooks/useLocalStorage.js";

const useCartStore = defineStore('cart', () => {
    const lStorage = useLocalStorage('cart', []);

    const [cart, setCart] = useRef(lStorage.getValue());

    const addProductToCart = (product) => {
        setCart([...cart.value, product]);
        lStorage.setValue(cart.value);
    }

    const removeProductFromCart = (product) => {
        const index = cart.value.findIndex((item) => item.id === product.id);

        if (index !== -1) {
            const newCart = [...cart.value];
            newCart.splice(index, 1);
            setCart(newCart);
            lStorage.setValue(newCart);
        }
    }

    const clearCart = () => {
        setCart([]);
        lStorage.setValue([]);
    }

    const getCart = () => {
        const items =
            cart.value
                .reduce((acc, product) => {
                    const index = acc.findIndex((item) => item.id === product.id);

                    if (index !== -1) {
                        acc[index].quantity += 1;
                        acc[index].totalPrice += product.price;
                    } else {
                        acc.push({...product, quantity: 1, totalPrice: product.price});
                    }
                    return acc;
                }, [])
                .sort((a, b) => a.id - b.id);

        const totalPrice = cart.value.reduce((acc, product) => acc + product.price, 0);

        return {
            items,
            totalPrice,
            totalItems: cart.value.length,
        };
    }

    return {
        cart,
        getCart,
        addProductToCart,
        removeProductFromCart,
        clearCart,
    };
});

export default useCartStore;