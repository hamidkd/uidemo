import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <a href="/" className="logo">
        LOGO
      </a>
      <nav class="header-nav">
        <a href="/" className="nav-link">
          Light
        </a>
        <a href="/dark" className="nav-link">
          Dark Mode
        </a>
      </nav>
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  position: sticky;
  padding: var(--padding-high);
  background-color: var(--primary-color);
  display: flex;
  justify-content: space-between;
  
  .header-nav {
    display: flex;
    justify-content: space-between;
    gap: var( --gap-high );
  }

  .logo {
    font-weight: 900;
    color: white;
  }

  .nav-link {
    color: white;
    font-weight: 700;
  }
`;
