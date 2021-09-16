import React from "react";
import styled from "styled-components";

export default function Row({ children }) {
  return <Div>{children}</Div>;
}
const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--gap);

  padding: var(--padding);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
`;
