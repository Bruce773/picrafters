import Snackbar from "@material-ui/core/Snackbar";
import React from "react";
import { Header } from "../GlobalComponents";

export const MessageSentSnackbar: React.FC<{
  submitError: boolean;
  showSnackbar: boolean;
  message?: string;
}> = ({ submitError, showSnackbar, message }) => (
  <Snackbar
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    open={showSnackbar}
    message={
      submitError ? (
        <Header color="red">
          Error! Please try again in a few minutes. If this issue persists,
          please email Bruce via bruce@picrafters.com
        </Header>
      ) : (
        <Header>
          {message
            ? message
            : `Your message has been sent! ✉️ You should recieve an answer within a few hours.`}
        </Header>
      )
    }
  />
);
