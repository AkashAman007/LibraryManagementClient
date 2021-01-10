import React from 'react';
import {render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import  UserBookListing  from "../user-book-listing";
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup);

it(" renders user book listing", () => {
    const tree = render(<MemoryRouter><UserBookListing/></MemoryRouter>)
    expect(tree.asFragment()).toMatchSnapshot();
});
