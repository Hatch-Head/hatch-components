import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "./Header";

/**
 * This is a test.
 */

export default {
  title: "Components/organisms/Header",
  component: Header,
  argType: {
    children: {
      type: String,
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.storyName = "Header";
Primary.args = {
  title: "Title text",
  heading: "Heading text",
  excerpt: "This is the excerpt",
};
