import React from "react";
import styled from "styled-components";

const StyledLink = styled.span`
  border-radius: 4px;
  background: lightgrey;
  padding: 2px 10px 2px 10px;
  font-size: 14px;
`;

export interface PillProps {
  to: string;
  children: JSX.Element | string;
}

const Pill = ({ children }: PillProps) => <StyledLink>{children}</StyledLink>;

export interface PillListProps {
  pills: PillProps[];
}

const PillList = ({ pills = [] }: PillListProps) => (
  <ul className="d-grid gap-2 d-md-flex px-0">
    {pills.map((pill) => (
      <Pill {...pill} />
    ))}
  </ul>
);

export default Pill;

export { PillList };
