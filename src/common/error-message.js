const errorMessages = {
    1000: "Your membership could not be verified",
    1001: "Your have reached your borrow limit. Please return book before borrowing further",
    1002: "You already have a copy of the book",
    1003: "Selected book is not available in our libraray",
    1004: "Unable to return this book",
    1005: "The book you are trying to return cannot be verified"

}

const defaultErrorMessage = "Something went wrong. Unable to execute request";

export const getErrorMessage = (errorCode) => {
    const errorMessage = errorMessages[errorCode];
    if(!errorMessage) {
        return defaultErrorMessage;
    }
    return errorMessage;
}
