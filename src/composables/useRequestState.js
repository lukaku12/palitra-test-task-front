const useRequestState = () => {

    const dataIsNotEmptyAfterFetch = (isFetched, data) => isFetched && data.length > 0;
    const dataIsEmptyAfterFetch = (isFetched, data) => isFetched && data.length === 0;

    const dataIsEmptyBeforeFetch = (isFetched, data) => !isFetched && data.length === 0;

    return {
        dataIsNotEmptyAfterFetch,
        dataIsEmptyBeforeFetch,
        dataIsEmptyAfterFetch,
    }
}

export default useRequestState;