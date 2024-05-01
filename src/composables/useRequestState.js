const useRequestState = () => {

    const dataIsNotEmptyAfterFetch = (isFetched, data) => Array.isArray(data) ? isFetched && data.length > 0 : isFetched && data;
    const dataIsEmptyAfterFetch = (isFetched, data) => Array.isArray(data) ? isFetched && data.length === 0 : isFetched && !data;

    const dataIsEmptyBeforeFetch = (isFetched, data) => Array.isArray(data) ? !isFetched && data.length === 0 : !isFetched && !data;

    return {
        dataIsNotEmptyAfterFetch,
        dataIsEmptyBeforeFetch,
        dataIsEmptyAfterFetch,
    }
}

export default useRequestState;