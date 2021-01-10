import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserBookListing extends Component {

    constructor() {
        super();
        this.state = {
            userBooks : [],
        }
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
            </div>
        
        )
    }
}

export default UserBookListing;