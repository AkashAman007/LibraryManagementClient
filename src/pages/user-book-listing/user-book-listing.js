import React, {Component} from 'react';
import { BookCard } from '../../components/book-card-component/book-card';
import {Link} from 'react-router-dom';
import * as ApiService from "../../api-manager/api-service";
import { AlertDismissible } from '../../components/alert-component/alert';
import { getErrorMessage } from '../../common/error-message';
import { TEST_USER_ID } from "../../common/util";

class UserBookListing extends Component {

    constructor() {
        super();
        this.state = {
            userBooks : [],
            alert: { visible: false, error: false, message: "" },
        }
        this.onReturnBook = this.onReturnBook.bind(this);
        this.loadBorrowedBooks = this.loadBorrowedBooks.bind(this);
        this.loadAlert = this.loadAlert.bind(this);
        this.removeAlert = this.removeAlert.bind(this);

    }

    render() {
        return (
        <div>
            <h1 className="title">
                My Books
                <Link data-testid="library-books-link" className="float-right link" to="/">
                    View Books
                </Link>
            </h1>

            <div className="info">
                <AlertDismissible alert={this.state.alert}  removeAlert={this.removeAlert}></AlertDismissible>
            </div>

            {this.state.userBooks.length > 0 ? (
                    <div className='book-grid'> 
                        {this.state.userBooks.map((book, index) => <BookCard key={index} book = {book} onReturnBook={this.onReturnBook} userListing={true}/>)}
                    </div>
                ) : (
                    <div className="no-content">You don't have any borrowed book</div>
                )}
            </div>
        
        )
    }

    componentDidMount() {
        this.loadBorrowedBooks();
    }

    async loadBorrowedBooks() {
        const result = await ApiService.getUserBorrowedBooks(1);
        if(result.success) {
            this.setState({
                userBooks: result.data
            });
        }
    }
    
    async onReturnBook(book) {
        const result = await ApiService.returnBook(TEST_USER_ID, book.id);
        if(result.success) {
            this.loadBorrowedBooks();
        }
        this.loadAlert(result);
    }

    loadAlert(apiResult) {
        const {error, errorCode} = apiResult;
        const message = error ? getErrorMessage(errorCode) : "Returned Book Successfully";
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

}

export default UserBookListing;