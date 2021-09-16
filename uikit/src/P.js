import React from 'react';
import styled from 'styled-components';

export default function P ({children, className}) {

return (
    <StyledP className={className}>
       {children}
    </StyledP>
)};
const StyledP = styled.p`
  font-family: var(--content-font);
  font-size: var(--content-font-size);
  max-width: var(--paragraph-max-width);
  line-height: 1.9;
`