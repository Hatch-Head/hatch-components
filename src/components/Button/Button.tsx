import React from "react";

export interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  tag?: "a" | "button";
}

const Button = ({
  tag: Tag = "a",
  variant = "primary",
  label,
}: ButtonProps) => {
  const classes = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };

  const c = classes[variant];

  return <Tag className={`btn lift ${c}`}>{label}</Tag>;
};

export default Button;

const ButtonSecondary = () => <Button variant="secondary" label="Button" />;
