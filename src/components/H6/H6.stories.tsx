import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import H6 from "./H6";

export default {
  title: "Components/atoms/Typography/H6",
  component: H6,
  parameters: {
    layout: null,
  },
  argType: {
    children: {
      type: String,
    },
  },
} as ComponentMeta<typeof H6>;

const Template: ComponentStory<typeof H6> = (args) => <H6 {...args} />;

export const Primary = Template.bind({});
Primary.storyName = "H6";
Primary.args = {
  children: "Heading 6",
};
