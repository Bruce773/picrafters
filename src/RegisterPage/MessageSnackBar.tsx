import Snackbar from "@material-ui/core/Snackbar";
import React from "react";
import { Header } from "../GlobalComponents";

export const MessageSnackBar: React.FC<{
  submitError: boolean;
  constantClassType: string;
  showSnackbar: boolean;
}> = ({ constantClassType, showSnackbar, submitError }) => (
  <Snackbar
    open={showSnackbar || submitError}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    autoHideDuration={5000}
    message={
      !submitError ? (
        <Header>
          <span role="img" aria-label="party emoji">
            🎉
          </span>
          You are now registered for {constantClassType}!
        </Header>
      ) : (
        <Header color="red">
          Error! Please try again later. If this error persists, please reach
          out to us via the contact page
        </Header>
      )
    }
  />
);
