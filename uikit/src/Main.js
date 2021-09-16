import React from "react";
import styled from "styled-components";

export default function Main({ children, className }) {
  return <StyledMain className={className}>{children}</StyledMain>;
}
const StyledMain = styled.main`
  display: grid;
  gap: var(--gap);
  min-height: 100%;
`;
