import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./styles.css";

class BookListing extends Component {

    constructor() {
        super();
        this.state = {
            books : [],
        }
    }

    componentDidMount() {

    }


    render() {
        return (
        <div>
            <h1 className="title">
                Available Books in Library
                <Link className="float-right link" to="/MyBooks">
                    See Borrowed Books
                </Link>
            </h1>
        </div>
        )
    }
 }
export default BookListing;