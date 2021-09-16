import { createGlobalStyle } from "styled-components";

export const themeVars = {
  primaryColor: "#ff7648",
  accentColor: "#727f9e",
  accent2Color: "#fbe4b1",
  accent3Color: "#f7ca65",
  darkColor: "#291b3d",
  lightGray: "#818181",
  borderRadius: "10px",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  boxShadowHover: "rgba(100, 100, 111, 0.8) 0px 7px 29px 0px",

  headingFont: "Poppins,'Permanent Marker', Arial, Helvetica, sans-serif",
  contentFont: "Poppins,'Kosugi', Arial, Helvetica, sans-serif",
};

export default createGlobalStyle`
// Define css variables ********************

:root {
  --default-background-color : white;
  --default-text-color : black;

  --primary-color: #7d32db;
  --secondary-color: #00f788;
  --suceess-color: #03a558;
  --info-color: #006fe0;
  --warning-color: #ee8d31;
  --error-color: #dc3055;

  --lightgray: #f0f0f0;
  --gray: gray;
  --darkgray: darkgray;

  --default-button-color: #aaa;

  --shadow: 0px 5px 20px 0px rgba(100, 100, 111, 0.2);
  /* --shadow: 0px 81px 106px rgba(0, 0, 0, 0.07), 0px 10.1425px 13.2728px rgba(0, 0, 0, 0.0290085); */
  --border-radius: 0.7rem;
  --border-radius-low: 0.3rem;
  --border-radius-high: 1.5rem;
  --border-radius-pill: 10rem;

  --heading-font: "Roboto";
  --content-font: "poppins";

  --content-font-size: 1.2rem;

  --padding: 1rem;
  --padding-high: 2rem;
  --padding-low: 0.5rem;

  --gap: 1rem;
  --gap-low: 0.5rem;
  --gap-high: 2rem;

  --paragraph-max-width: 50ch;

  --h1-size: 4rem;
  --h2-size: 2rem;
  --h3-size: 1.5rem;

  --button-font-size: 1.2rem;
  --tag-font-size: 1rem;
}


//Resrt Styles ***********************

*,
  *:before,
  *:after {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
  }

  html, body, div,
  input, button, select, option,
  h1, h2, h3, h4, h5, h6, p,
  text {
      /* font-family: sans-serif; */
      /* background: var( --default-background-color ); */
      color: var( --default-text-color );
    }
    
    html {
      direction: ltr;
    }
    
    html, body {
    background: var( --default-background-color );
      max-width: 100vw;
  }

  //making website height at least 100% screen size.
  html,
  body,
  body > div:first-child,
  div#__next {
    height: 100%;
  }

  div#__next {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  
  /* http://meyerweb.com/eric/tools/css/reset/
      v2.0 | 20110126
      License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      vertical-align: baseline;
  }

  html {
    font-size: 100%;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
      margin: 0;
  }
  p {
    line-height: 1.6;
    font-size: 1.2em;
    max-width: 50ch;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }



body {
  margin: 0;
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
// Global Styles ***********************


label,
button {
  color: ${themeVars.accentColor};
  font-family: ${themeVars.headingFont};
  text-align: center;
}

div,
span,
p,
a,
li,
blockquote,
input,
textarea,
select, option, label, table, th, td {
  font-family: ${themeVars.contentFont};
}



a {
  color: inherit;
  text-decoration: none;
}

p a {
  color: ${themeVars.primaryColor};
}



button {
  border: none;
  display:grid;
  place-items: center;
  gap: 1rem;
}

 .button, .primary-button, .cta-button , .big-button, .small-button {
  border: none;
  border-radius: 600px;
  padding-inline: 2rem; 
  padding-block: 0.5em;
  min-width: 10rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: ${themeVars.boxShadow};

  background-color: white;
  color: ${themeVars.primaryColor};
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
  box-shadow: ${themeVars.boxShadowHover};
  }
}

.primary-button, .cta-button , .big-button , .small-button {
  background-color: ${themeVars.primaryColor};
  color: white;
}
.big-button {
  font-size: 2rem;
}

.small-button {
  font-size: 1rem;
  font-weight: 400;
  padding-inline: 1rem; 
}

option {
  border-radius: 1rem;
}

.center-text {
  text-align: center;
}

.center-item {
  margin: 0 auto;
}
//vertical-aligning react-icons
.react-icons {
  vertical-align: middle;  
}

/* ***  */


h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--heading-font);
}

p,
a,
span,
div,
label,
input,
button,
textarea,
select,
option,
table,
td,
tr,
th {
  font-family: var(--content-font);
  font-size: var(--content-font-size);
}

`;
