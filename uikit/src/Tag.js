import React from "react";
import styled from "styled-components";

export default function Tag({className, children, type, ...otherProps}) {

  console.log(type);

let newClassName = className ? className : '';
  if (type ==='primary') {
    newClassName = newClassName + " primary";
  }

  if (type ==='secondary') {
    newClassName = newClassName + " secondary";
  }
  if (type ==='small') {
    newClassName = newClassName + " small";
  }

  return <StyledButton className={newClassName} {...otherProps} >{children}</StyledButton>;
}
const StyledButton = styled.button`
  border: 2px solid var(--info-color);
  color: var(--info-color);
  background: none;
  padding: var(--padding-low) var(--padding);
  border-radius: var(--border-radius-pill);
  font-weight: 600;
  font-size: var(--tag-font-size);
  
  &.primary {
    background-color: red;
    background-color: var(--primary-color);
  }
  
  &.secondary {
    background-color: var(--secndary-color);
  }
  &.small {
    padding: var(--padding-low) var(--padding);
  }
  `;
