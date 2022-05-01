import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import H3 from "./H3";

export default {
  title: "Components/atoms/Typography/H3",
  component: H3,
  parameters: {
    layout: null,
  },
  argType: {
    children: {
      type: String,
    },
  },
} as ComponentMeta<typeof H3>;

const Template: ComponentStory<typeof H3> = (args) => <H3 {...args} />;

export const Primary = Template.bind({});
Primary.storyName = "H3";
Primary.args = {
  children: "Heading 3",
};
