const useLocalStorage = (key, initialValue) => {

    const getValue = () => {
        const item = JSON.parse(localStorage.getItem(key));
        return item ? item : initialValue;
    };

    const setValue = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    return {getValue, setValue};
}

export default useLocalStorage;