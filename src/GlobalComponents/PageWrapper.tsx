import React from "react";
import Box from "@material-ui/core/Box";

export const PageWrapper: React.FC = ({ children }) => (
  <Box ml={{ xs: "10px" }} mr={{ xs: "10px" }} mt={{ xs: "32px" }}>
    {children}
  </Box>
);
