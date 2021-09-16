import React from "react";
import styled from "styled-components";

export default function Section({ children, className }) {
  return <StyledSection className={className}>{children}</StyledSection>;
}
const StyledSection = styled.section`
  padding: var( --padding-high );
  display:flex;
  flex-direction:column;
  gap: var(--gap-high);
`;
