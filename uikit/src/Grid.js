import React from "react";
import styled from "styled-components";

export default function Grid({ children, minColumnWidth, className }) {
  return (
    <StyledCards minColumnWidth={minColumnWidth} className={className}>
      {children}
    </StyledCards>
  );
}
const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${(props) => props.minColumnWidth}, 1fr));
  gap: var(--gap-high);
`;
