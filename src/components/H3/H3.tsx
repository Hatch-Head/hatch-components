import React from "react";

type OneOrAnother<T1, T2> =
  | (T1 & { [K in keyof T2]?: undefined })
  | (T2 & { [K in keyof T1]?: undefined });

export type H3Props = OneOrAnother<
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

const H3 = ({
  Right = false,
  Center = false,
  tag: Tag = "h3",
  ...rest
}: H3Props) => {
  let textClass = "";
  if (Right) {
    textClass = "text-end";
  }
  if (Center) {
    textClass = "text-center";
  }
  return (
    <Tag className={`text-uppercase text-grey mb-10 ${textClass}`} {...rest} />
  );
};

export default H3;
