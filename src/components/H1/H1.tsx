import React from "react";

enum TextAlign {
  Center = "text-center",
  Left = "text-start",
  Right = "text-end",
}

type OneOrAnother<T1, T2> =
  | (T1 & { [K in keyof T2]?: undefined })
  | (T2 & { [K in keyof T1]?: undefined });

export type H1Props = OneOrAnother<
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

const H1 = ({
  Right = false,
  Center = false,
  tag: Tag = "h1",
  ...rest
}: H1Props) => {
  let textClass = "";
  if (Right) {
    textClass = "text-end";
  }
  if (Center) {
    textClass = "text-center";
  }
  return <Tag className={`display-3 mb-6 ${textClass}`} {...rest} />;
};

export default H1;
