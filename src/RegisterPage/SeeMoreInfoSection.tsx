import React from "react";
import { brightBlue } from "../colors";
import { Header, Link } from "../GlobalComponents";
import { StandardizeUrlString } from "../Utils";

export const SeeMoreInfoSection: React.FC<{ workShopName: string }> = ({
  workShopName
}) => (
  <Header style={{ marginTop: "24px", fontSize: "20px" }}>
    <Header style={{ display: "inline" }}>Price (6 months): </Header>{" "}
    <Header style={{ display: "inline" }} color={brightBlue}>
      {workShopName === "Kids" ? "$100" : "$200"}
    </Header>
    <br />
    <br />
    Click{" "}
    <Link
      target="_blank"
      to={`/workshops#${StandardizeUrlString(workShopName)}-workshop`}
      style={{ color: brightBlue }}
    >
      HERE
    </Link>{" "}
    to see more information about the {workShopName} Workshop
  </Header>
);
