import React from 'react';
import {render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import  BookListing  from "../book-listing";
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup);

it("book listing snapshot", () => {
    const tree = render(<MemoryRouter><BookListing/></MemoryRouter>)
    expect(tree.asFragment()).toMatchSnapshot();
});
