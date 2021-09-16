import React from "react";
import styled from "styled-components";

export default function Alert({ type, className, children }) {
  return <StyledAlert className={`${className} ${type}`}>{children}</StyledAlert>;
}
const StyledAlert = styled.div`
  border-radius: var(--border-radius);
  --alert-color: var(var(--info-color));
  padding: var(--padding);
  background-color: var(--lightgray);
  border-inline-start: 0.2rem solid var(--alert-color);

  &.success {
    --alert-color: var(--suceess-color);
  }

  &.info {
    --alert-color: var(--info-color);
  }

  &.warning {
    --alert-color: var(--warning-color);
  }

  &.error {
    --alert-color: var(--error-color);
  }
`;
