import React from "react";

export interface HeaderProps {
  title: String;
  heading: String;
  excerpt: String;
}

const HeaderGeneric = ({ title, heading, excerpt }: HeaderProps) => (
  <div className="pt-6 pt-md-11 col-12 text-center">
    <h6 className="text-uppercase text-primary mb-5">{title}</h6>
    <h1 className="display-3 mb-4">{heading}</h1>
    <p className="font-size-lg text-muted mb-9">{excerpt}</p>
  </div>
);

export default HeaderGeneric;
