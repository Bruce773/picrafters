import Snackbar from "@material-ui/core/Snackbar";
import React from "react";
import { Header } from "../GlobalComponents";

export const MessageSnackBar: React.FC<{
  status: number;
  constantClassType: string;
}> = ({ status, constantClassType }) => (
  <Snackbar
    open={status === 200 || status === 400 ? true : false}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left"
    }}
    autoHideDuration={5000}
    message={
      status === 200 ? (
        <Header>🎉You are now registered for {constantClassType}!</Header>
      ) : (
        <Header color="red">
          Error! Please ensure you've filled out every field.
        </Header>
      )
    }
  />
);
