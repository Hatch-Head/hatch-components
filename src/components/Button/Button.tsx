import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <a className="btn btn-primary">{props.label}</a>;
};

export default Button;
