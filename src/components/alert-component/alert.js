import React from 'react';
import Alert from "react-bootstrap/Alert";
import { Constants } from "../../common/constants";

export const AlertDismissible = (props) => {
  console.log({props});
  const {alert, removeAlert} = props;
  const {visible, error, message} = alert;
  const title = error ? Constants.ERROR_MESSAGE_TITLE : Constants.SUCCESS_MESSAGE_TITLE;
  if (visible) {
    return (
      <Alert  data-testid="alert-element" variant={error ? "danger": "success"} onClose={() => removeAlert()} dismissible>
        <Alert.Heading>{title}</Alert.Heading>
        <p>
          {message}
        </p>
      </Alert>
    );
  }
  return <div/>
}
