import React, {Component} from 'react';
import { BookCard } from '../../components/book-card-component/book-card';
import {Link} from 'react-router-dom';
import * as ApiService from "../../api-manager/api-service";
import { AlertDismissible } from '../../components/alert-component/alert';
import { getErrorMessage } from '../../common/error-message';
import { TEST_USER_ID } from "../../common/util";
import { Constants } from "../../common/constants";

class BookListing extends Component {

    constructor() {
        super();
        this.state = {
            books : [],
            alert: { visible: false, error: false, message: "" },
        }
        this.onBorrowBook = this.onBorrowBook.bind(this);
        this.loadBooks = this.loadBooks.bind(this);
        this.loadAlert = this.loadAlert.bind(this);
        this.removeAlert = this.removeAlert.bind(this);
    }

    componentDidMount() {
        this.loadBooks();
    }

    async loadBooks() {
        const result = await ApiService.getAllBooks();
        if(result.success) {
            this.setState({
                books: result.data
            });
        }
    }
    
    async onBorrowBook(book) {
        const result = await ApiService.borrowBook(TEST_USER_ID, book.id);
        if(result.success) {
            this.loadBooks();
        }
        this.loadAlert(result);
    }

    loadAlert(apiResult) {
        const {error, errorCode} = apiResult;
        const message = error ? getErrorMessage(errorCode) : Constants.BORROW_BOOK_SUCCESS_MESSAGE;
        this.setState({
            alert: { visible: true, error, message }
        });
        setTimeout(this.removeAlert, 5000, false);
    }

    removeAlert() {
        this.setState({
            alert: { visible: false, error: false, message: "" },
        });
    }


    render() {
        return (
        <div>
            <h1 className="title">
                Available Books in Library
                <Link data-testid="my-books-link" className="float-right link" to="/MyBooks">
                    See Borrowed Books
                </Link>
            </h1>

            <div className="info">
                <AlertDismissible alert={this.state.alert}  removeAlert={this.removeAlert}></AlertDismissible>
            </div>

            <div className='book-grid'>
                {this.state.books.length > 0 ? (
                    this.state.books.map((book, index) => <BookCard key={index} book = {book} onBorrowBook={this.onBorrowBook}/>
                )
                ) : (
                    <div>No books in library</div>
                )}
            </div>
        </div>
        )
    }
 }
export default BookListing;