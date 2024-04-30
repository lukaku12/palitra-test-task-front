import {ref} from "vue";

const useRef = (initialValue) => {
    const value = ref(initialValue);
    const setValue = (newValue) => value.value = newValue;

    return [value, setValue];
}

export default useRef;