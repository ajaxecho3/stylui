import React from "react";
import * as stylex from "@stylexjs/stylex";
import { ComponentProps } from "react";

const styles = stylex.create({
  button: {
    backgroundColor: {
      default: "lightblue",
      ":hover": "blue",
      ":active": "darkblue",
    },
  },
});
export interface ButtonProps extends ComponentProps<"button"> {}

const Button: React.FC = ({ children, ...rest }: ButtonProps) => {
  return (
    <button {...stylex.props(styles.button)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
