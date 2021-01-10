import React from 'react';
import {render, cleanup, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import  Main  from "../main";
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup);

it(" renders main with book listing page", async () => {
    await wait();
    const tree = render(<MemoryRouter initialEntries={["/"]}><Main/></MemoryRouter>)
    expect(tree.asFragment()).toMatchSnapshot();
});

it(" renders main with user book listing page", async () => {
    await wait();
    const tree = render(<MemoryRouter initialEntries={["/MyBooks"]}><Main/></MemoryRouter>)
    expect(tree.asFragment()).toMatchSnapshot();
});
