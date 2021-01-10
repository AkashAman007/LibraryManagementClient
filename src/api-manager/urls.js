
export const API_ENDPOINT  = {
    GET_ALL_BOOKS: "/library/books",
    BORROW_BOOK: "/library/books/borrow",
    GET_USER_BOOKS: "/library/books/user?userId=##USER_ID##",
    RETURN_BOOK:"/library/books/return"
};

const BASE_URL = "http://localhost:7777/api";

export const getCompleteUrl = (endpoint) => {
    return BASE_URL + endpoint;
}