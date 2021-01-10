import React from 'react';
import {render, cleanup, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import  UserBookListing  from "../user-book-listing";
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup);

it(" renders user book listing", async () => {
    await wait()
    const tree = render(<MemoryRouter><UserBookListing/></MemoryRouter>)
    expect(tree.asFragment()).toMatchSnapshot();
});

it("library books title", async () => {
    await wait();
    const tree = render(<MemoryRouter><UserBookListing/></MemoryRouter>)
    const titleElement = tree.getByText("My Books");
    expect(titleElement).toBeTruthy;
    expect(titleElement).toHaveClass('title');
});

it("user book listing has link to library books", async () => {
    await wait();
    const tree = render(<MemoryRouter><UserBookListing/></MemoryRouter>)
    const linkElement = tree.getByTestId("library-books-link");
    expect(linkElement).toBeTruthy;
    expect(linkElement).toHaveClass('link');
    expect(linkElement).toHaveAttribute('href');
    expect(linkElement.getAttribute('href')).toEqual('/');
});

it("when borrowed books list is empty", async () => {
    await wait();
    const tree = render(<MemoryRouter><UserBookListing/></MemoryRouter>)
    const messageElement = tree.getByText("You don't have any borrowed book");
    expect(messageElement).toBeTruthy;
});
