import React from 'react';
import {render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import  { AlertDismissible }  from "../alert";

afterEach(cleanup);

it("Alert Renders Error Message", () => {
    const alert = { visible: true, error: true, message: "Unavailable" };
    const removeAlert = () => {};
    const tree = render(<AlertDismissible alert={alert}  removeAlert={removeAlert}/>)
    expect(tree.asFragment()).toMatchSnapshot();
});

it("Alert Renders Success Message", () => {
    const alert = { visible: true, error: false, message: "Success" };
    const removeAlert = () => {};
    const tree = render(<AlertDismissible alert={alert}  removeAlert={removeAlert}/>)
    expect(tree.asFragment()).toMatchSnapshot();
});

it("Alert renders nothing", () => {
    const alert = { visible: false, error: true, message: "" };
    const removeAlert = () => {};
    const tree = render(<AlertDismissible alert={alert}  removeAlert={removeAlert}/>)
    expect(tree.asFragment()).toMatchSnapshot();
});

it("Have alert-danger class in case in case of error", () => {
    const alert = { visible: true, error: true, message: "" };
    const removeAlert = () => {};
    const tree = render(<AlertDismissible alert={alert}  removeAlert={removeAlert}/>)
    const alertElement = tree.getByTestId('alert-element');
    expect(alertElement).toHaveClass('alert alert-danger');
});

it("Have alert-success class in case in case of error", () => {
    const alert = { visible: true, error: false, message: "" };
    const removeAlert = () => {};
    const tree = render(<AlertDismissible alert={alert}  removeAlert={removeAlert}/>)
    const alertElement = tree.getByTestId('alert-element');
    expect(alertElement).toHaveClass('alert alert-success');
});

it("Alert Title to have Error Text in case of error", () => {
    const alert = { visible: true, error: true, message: "" };
    const removeAlert = () => {};
    const tree = render(<AlertDismissible alert={alert}  removeAlert={removeAlert}/>)
    const errorText = tree.getByText("Error");
    expect(errorText).toBeTruthy;
});

it("Alert Title to have Success Text in case of error", () => {
    const alert = { visible: true, error: false, message: "" };
    const removeAlert = () => {};
    const tree = render(<AlertDismissible alert={alert}  removeAlert={removeAlert}/>)
    const successText = tree.getByText("Success!!");
    expect(successText).toBeTruthy;
});