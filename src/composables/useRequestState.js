const useRequestState = () => {

    const dataIsNotEmptyAfterFetch = (isFetched, data) => {
        if (Array.isArray(data)) {
            return isFetched && data.length > 0;
        } else {
            return !!(isFetched && Object.keys(data).length > 0);
        }
    }
    const dataIsEmptyAfterFetch = (isFetched, data) => {
        if (Array.isArray(data)) {
            return isFetched && data.length === 0;
        } else {
            return isFetched && Object.keys(data).length === 0;
        }
    }

    const dataIsEmptyBeforeFetch = (isFetched, data) => {
        if (Array.isArray(data)) {
            return !isFetched && data.length === 0;
        } else {
            return !isFetched && Object.keys(data).length === 0;
        }
    }

    return {
        dataIsNotEmptyAfterFetch,
        dataIsEmptyBeforeFetch,
        dataIsEmptyAfterFetch,
    }
}

export default useRequestState;