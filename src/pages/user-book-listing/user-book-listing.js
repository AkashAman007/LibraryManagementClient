import React, {Component} from 'react';
import { BookCard } from '../../components/book-card-component/book-card';
import {Link} from 'react-router-dom';
import * as ApiService from "../../api-manager/api-service";
import { TEST_USER_ID } from "../../common/util";

class UserBookListing extends Component {

    constructor() {
        super();
        this.state = {
            userBooks : [],
        }
        this.onReturnBook = this.onReturnBook.bind(this);

    }

    render() {
        return (
        <div>
            <h1 className="title">
                My Books
                <Link className="float-right link" to="/">
                    View Books
                </Link>
            </h1>
            {this.state.userBooks.length > 0 ? (
                    <div className='photo-grid'> 
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
    }

}

export default UserBookListing;