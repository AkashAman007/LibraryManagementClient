import React, {Component} from 'react';
import UserBookListing from '../../pages/user-book-listing/user-book-listing';
import { Route } from 'react-router-dom';
import BookListing from '../../pages/book-listing/book-listing';

class Main extends Component {
    render() {
        return  <div>
                    <Route exact path = "/" render={() => (
                        <div>
                            <BookListing/>
                        </div>
                    )}/>
                    <Route exact path = "/MyBooks" render={() => (
                        <div>
                            <UserBookListing/>
                        </div>
                    )}/>
                </div>
    }
}

export default Main;