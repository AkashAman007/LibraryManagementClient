import React from 'react';
import {render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import  { BookCard }  from "../book-card";

afterEach(cleanup);

it("library book card rendered", () => {
    const book = {
        author: "Author Name",
        imageLink: "imageLink",
        title: "Title of Book",
        availableQty: 10,
        description: "Book Description"
    }
    const tree = render(<BookCard book = {book} onBorrowBook={()=>{}}/>)
    expect(tree.asFragment()).toMatchSnapshot();
});

it("user borrowed book rendered", () => {
    const book = {
        author: "Author Name",
        imageLink: "imageLink",
        title: "Title of Book",
        availableQty: 10,
        description: "Book Description"
    }
    const tree = render(<BookCard book = {book} onReturnBook={()=>{}} userListing={true}/>)
    expect(tree.asFragment()).toMatchSnapshot();
});

it("library book card shows Available Qty", () => {
    const availableBookQty = 10;
    const book = {
        author: "Author Name",
        imageLink: "imageLink",
        title: "Title of Book",
        availableQty: availableBookQty,
        description: "Book Description"
    }
    const tree = render(<BookCard book = {book} onReturnBook={()=>{}}/>)
    const availableQtyText = tree.queryByText("Available Qty.");
    expect(availableQtyText).toBeTruthy;
    const availableBookQtyElement = tree.queryByText(availableBookQty);
    expect(availableBookQtyElement).toHaveClass("badge badge-info");
});

it("user borrowed book card does not show Available Qty", () => {
    const book = {
        author: "Author Name",
        imageLink: "imageLink",
        title: "Title of Book",
        availableQty: 10,
        description: "Book Description"
    }
    const tree = render(<BookCard book = {book} onReturnBook={()=>{}} userListing={true}/>)
    const availableQtyText = tree.queryByText("Available Qty");
    expect(availableQtyText).toBeNull;
});

it("library book card has borrow button", () => {
    const availableBookQty = 10;
    const book = {
        author: "Author Name",
        imageLink: "imageLink",
        title: "Title of Book",
        availableQty: availableBookQty,
        description: "Book Description"
    }
    const tree = render(<BookCard book = {book} onReturnBook={()=>{}}/>)
    const borrowTextElement = tree.queryByText("Borrow");
    expect(borrowTextElement).toBeTruthy;
    expect(borrowTextElement).toHaveClass('btn');
});

it("user book card has return button", () => {
    const availableBookQty = 10;
    const book = {
        author: "Author Name",
        imageLink: "imageLink",
        title: "Title of Book",
        availableQty: availableBookQty,
        description: "Book Description"
    }
    const tree = render(<BookCard book = {book} onReturnBook={()=>{}} userListing={true}/>)
    const borrowTextElement = tree.queryByText("Return");
    expect(borrowTextElement).toBeTruthy;
    expect(borrowTextElement).toHaveClass('btn');
});