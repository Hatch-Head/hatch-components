import React from "react";

export interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * The style of of the rendered button
   */
  variant?: "primary" | "secondary";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * The base HTML tag used to render the button
   */
  tag?: "a" | "button"; // TODO: @andrew workout how to get Link to work here
  /**
   * Is the button disabled
   */
  disabled: boolean;
}

const Button = ({
  tag: Tag = "a",
  variant = "primary",
  label,
  size = "medium",
  ...rest
}: ButtonProps) => {
  const classes = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };

  const c = classes[variant];

  return (
    <Tag className={`btn lift ${c}`} {...rest}>
      {label}
    </Tag>
  );
};

export default Button;
