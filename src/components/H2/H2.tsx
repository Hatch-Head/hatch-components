import React from "react";

type OneOrAnother<T1, T2> =
  | (T1 & { [K in keyof T2]?: undefined })
  | (T2 & { [K in keyof T1]?: undefined });

export type H2Props = OneOrAnother<
  {
    Right: boolean;
    Center: boolean;
  },
  {
    children: any;
    /**
     * The base HTML tag used to render the button
     */
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  }
>;

const H2 = ({
  Right = false,
  Center = false,
  tag: Tag = "h2",
  ...rest
}: H2Props) => {
  let textClass = "";
  if (Right) {
    textClass = "text-end";
  }
  if (Center) {
    textClass = "text-center";
  }
  return <Tag className={`display-4 mb-6 text-red ${textClass}`} {...rest} />;
};

export default H2;
