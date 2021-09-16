import React from "react";
import styled from "styled-components";

export default function Button({className, font, children, type, ...otherProps}) {

  console.log(type);

let newClassName = className ? className : '';
  if (type ==='featured') {
    newClassName = newClassName + " featured";
  }
  if (type ==='primary') {
    newClassName = newClassName + " primary";
  }

  if (type ==='secondary') {
    newClassName = newClassName + " secondary";
  }
  if (type ==='small') {
    newClassName = newClassName + " small";
  }

  return <StyledButton className={newClassName} {...otherProps} font={font}>{children}</StyledButton>;
}
const StyledButton = styled.button`
 --content-font: ${(props) => props.font};
  background-color: var(--default-button-color);
  padding: var(--padding);
  border-radius: var(--border-radius-pill);
  font-weight: 700;
  color: white;
  box-shadow: var(--shadow);
  font-size: var(--button-font-size);
  
  &.featured {
    background-color: var(--primary-color);
    background-color: #00DBDE;
background-image: linear-gradient(45deg, #00DBDE 0%, #FC00FF 100%);

  }
  &.primary {
    background-color: var(--primary-color);
  }
  
  &.secondary {
    background-color: var(--secndary-color);
  }
  &.small {
    padding: var(--padding-low) var(--padding);
  }
  `;