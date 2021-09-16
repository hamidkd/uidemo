import React from "react";
import styled from "styled-components";

export default function H({ children, level }) {
  if (level === "1") {
    return <StyledH1>{children}</StyledH1>;
  }
  if (level === "2") {
    return <StyledH2>{children}</StyledH2>;
  }
  if (level === "3") {
    return <StyledH3>{children}</StyledH3>;
  }
}
const StyledH1 = styled.h1`
  font-family: var(--heading-font);
  font-size: var(--h1-size);
  font-weight: 900;
  `;
const StyledH2 = styled.h2`
  font-family: var(--heading-font);
  font-size: var(--h2-size);
  font-weight: 900;
`;
const StyledH3 = styled.h3`
  font-family: var(--heading-font);
  font-size: var(--h3-size);
`;
