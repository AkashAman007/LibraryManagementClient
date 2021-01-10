import React from 'react';
import {render, cleanup, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import  BookListing  from "../book-listing";
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup);

it("renders book listing", async () => {
    await wait();
    const tree = render(<MemoryRouter><BookListing/></MemoryRouter>)
    expect(tree.asFragment()).toMatchSnapshot();
});

it("library books title", async () => {
    await wait();
    const tree = render(<MemoryRouter><BookListing/></MemoryRouter>)
    const titleElement = tree.getByText("Available Books in Library");
    expect(titleElement).toBeTruthy;
    expect(titleElement).toHaveClass('title');
});

it("book listing has link to my books", async () => {
    await wait();
    const tree = render(<MemoryRouter><BookListing/></MemoryRouter>)
    const linkElement = tree.getByTestId("my-books-link");
    expect(linkElement).toBeTruthy;
    expect(linkElement).toHaveClass('link');
    expect(linkElement).toHaveAttribute('href');
    expect(linkElement.getAttribute('href')).toEqual('/MyBooks');
});

it("when no books in library", async () => {
    await wait();
    const tree = render(<MemoryRouter><BookListing/></MemoryRouter>)
    const messageElement = tree.getByText("No books in library");
    expect(messageElement).toBeTruthy;
});
