import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import H2 from "./H2";

export default {
  title: "Components/atoms/Typography/H2",
  component: H2,
  parameters: {
    layout: null,
  },
  argType: {
    children: {
      type: String,
    },
  },
} as ComponentMeta<typeof H2>;

const Template: ComponentStory<typeof H2> = (args) => <H2 {...args} />;

export const Primary = Template.bind({});
Primary.storyName = "H2";
Primary.args = {
  children: "Heading 2",
};
