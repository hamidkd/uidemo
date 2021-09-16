import React from "react";
import styled from "styled-components";
import Button from "./Button";
import H from "./H";
import P from "./P";

export default function Card() {
  return (
    <StyledDiv>
      <img className="card-image" src="img.jpg" />
      <img className="avatar" src="avatar.png" />
      <H level="3">An NFT Card</H>
      <P>This is a card.</P>
      <P>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit eius labore animi, ad
        tempore libero odio tenetur ipsam, sunt ea dolores facilis, ...
      </P>
      <Button>BUY THIS </Button>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  display: grid;
  gap: var(--gap);
  border-radius: var(--border-radius-high);
  padding: var(--padding);
  box-shadow: var(--shadow);

  .card-image {
    width: 100%;
    border-radius: var(--border-radius);
  }

  .avatar {
    max-width: 80px;
    border-radius: 500px;
    border: 4px solid var(--secondary-color);
    box-shadow: var(--shadow);
    /* transition: translate(-50px, -50px); */
    margin-top: -60px;
    margin-inline-start: 20px;
  }
`;
