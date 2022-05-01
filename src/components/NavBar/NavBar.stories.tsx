// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavBar from "./NavBar";

export default {
  title: "Components/organisms/NavBar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Nav = Template.bind({});
Nav.storyName = "NavBar";
Nav.args = {};
