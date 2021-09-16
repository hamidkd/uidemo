import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter class="footer">
      <a href="/" class="logo-in-footer">
        LOGO
      </a>
      <div class="links-in-footer">
        <a href="/" class="link-in-footer">
          About Us
        </a>
        <a href="/" class="link-in-footer">
          Who we are
        </a>
        <a href="/" class="link-in-footer">
          Our values
        </a>
        <a href="/" class="link-in-footer">
          Contact us
        </a>
        <a href="/" class="link-in-footer">
          Customer Care
        </a>
        <a href="/" class="link-in-footer">
          Become a teacehr
        </a>
        <a href="/" class="link-in-footer">
          Terms of Service
        </a>
        <a href="/" class="link-in-footer">
          Privacy Policy
        </a>
        <a href="/" class="link-in-footer">
          Cookies
        </a>
        <a href="/" class="link-in-footer">
          Social Media
        </a>
        <a href="/" class="link-in-footer">
          Instagram
        </a>
        <a href="/" class="link-in-footer">
          Twitter
        </a>
      </div>
    </StyledFooter>
  );
}
const StyledFooter = styled.footer`
  background-color: dimgray;
  padding: var(--padding);
  color: white;
  display: grid;
  gap: var(--gap);

  .links-in-footer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: var(--gap);
  }

  .link-in-footer {
    border-radius: var(--border-radius-low);
  }
`;
