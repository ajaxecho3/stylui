import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  button: {
    backgroundColor: {
      default: "lightblue",
      ":hover": "blue",
      ":active": "darkblue",
    },
  },
});
type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return <button {...stylex.props(styles.button)}>{text}</button>;
};

export default Button;
