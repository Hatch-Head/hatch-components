import React from "react";

type OneOrAnother<T1, T2> =
  | (T1 & { [K in keyof T2]?: undefined })
  | (T2 & { [K in keyof T1]?: undefined });

export type H6Props = OneOrAnother<
  {
    Right: boolean;
    Center: boolean;
  },
  {
    children: any;
    /**
     * The base HTML tag used to render the button
     */
    tag?: "h1" | "h3" | "h3" | "h4" | "h5" | "h6";
  }
>;

const H6 = ({
  Right = false,
  Center = false,
  tag: Tag = "h6",
  ...rest
}: H6Props) => {
  let textClass = "";
  if (Right) {
    textClass = "text-end";
  }
  if (Center) {
    textClass = "text-center";
  }
  return (
    <Tag
      className={`font-family-sans-serif text-warning mb-5 text-uppercase d-inline ${textClass}`}
      {...rest}
    />
  );
};

export default H6;
