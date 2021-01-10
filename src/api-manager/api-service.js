import {sendGetRequest, sendPostRequest } from "./request-handler";
import { getCompleteUrl, API_ENDPOINT } from "./urls";

export const getAllBooks = async () => {
    let url = getCompleteUrl(API_ENDPOINT.GET_ALL_BOOKS);
    const resp =  await sendGetRequest(url);
    return resp;
};

export const getUserBorrowedBooks = async (userId) => {
    let url = getCompleteUrl(API_ENDPOINT.GET_USER_BOOKS).replace(/##USER_ID##/g, userId);
    const resp =  await sendGetRequest(url);
    return resp;
};

export const borrowBook = async (userId, bookId) => {
    let url = getCompleteUrl(API_ENDPOINT.BORROW_BOOK);
    const body = {
        userId: userId,
        bookId: bookId
    }
    const resp =  await sendPostRequest(url, body);
    return resp;
};


export const returnBook = async (userId, bookId) => {
    let url = getCompleteUrl(API_ENDPOINT.RETURN_BOOK);
    const body = {
        userId: userId,
        bookIds: [bookId]
    }
    const resp =  await sendPostRequest(url, body);
    return resp;
};