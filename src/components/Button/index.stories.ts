import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import { ButtonProps } from "./button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Hello World" },
};
