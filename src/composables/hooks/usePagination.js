const usePagination = (itemsToPaginate, page = 1, perPage = 10) => {
    // return the original data if it's not an array
    if (!itemsToPaginate || !Array.isArray(itemsToPaginate)) return itemsToPaginate;

    // return paginated data

    return {
        data: itemsToPaginate.slice((page - 1) * perPage, page * perPage),
        page: page,
        perPage: perPage,
        totalPages: Math.ceil(itemsToPaginate.length / perPage),
    };
}

export default usePagination;