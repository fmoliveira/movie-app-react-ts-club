import React from "react";
import { action } from "@storybook/addon-actions";
import NavBar from "./NavBar";

export default {
  title: "Nav Bar",
  component: NavBar,
};

export const normal = () => <NavBar onSearch={action("Search Event")} />;
