import React, { Children } from "react";
import styled from "styled-components";

export default function Panel({ className, imgSrc, minHeight , children}) {
  return (
    <StyledBanner className={className} imgSrc={imgSrc} minHeight={minHeight}>
      {children}
    </StyledBanner>
  );
}
const StyledBanner = styled.div`
  padding: var(--padding-high);
  border-radius: var(--border-radius-high);
  box-shadow: var(--shadow);
  background: url(${(props) => props.imgSrc}) center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: ${(props) => props.minHeight ? props.minHeight : "auto"};
  display:flex;
  flex-direction:column;
  gap: var( --gap );
`;
