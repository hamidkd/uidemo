import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import P from "./P";
import Footer from "./Footer";
import H from "./H";
import Section from "./Section";
import Button from "./Button";
import Row from "./Row";
import Tag from "./Tag";
import Alert from "./Alert";
import Grid from "./Grid";
import Card from "./Card";
import Panel from "./Panel";
import styled from "styled-components";

export default function DemoContent() {
  const [font, setFont] = useState("Poppins");
  const [headingFont, setHeadingFont] = useState("Poppins");

  const fontNames = [
    "Poppins",
    "Roboto",
    "'Roboto Condensed'",
    "lato",
    "railway",
    "Montserrat",
    "'Source Sans Pro'",
    "'Open sans'",
    "'PT Sans'",
    "'Inter'",
    "'PT Sans'",
    "'PT Sans'",
    "'Rubic'",
    "'Century Gothic'",
    "'Product Sans'",
    "'Proxima Nova'",
  ];
  return (
    <ContentWrapper font={font} headingFont={headingFont}>
      <Header />
      <Main>
        <Section>
          <H level="3">Choose the Heading font</H>
          <Row>
            {fontNames.map((fontName) => {
              return (
                <Button font={fontName} type="small" onClick={() => setHeadingFont(() => fontName)}>
                  {fontName}
                </Button>
              );
            })}
          </Row>
          <H level="3">Choose the content font</H>
          <Row>
            {fontNames.map((fontName) => {
              return (
                <Button font={fontName} type="small" onClick={() => setFont(() => fontName)}>
                  {fontName}
                </Button>
              );
            })}
          </Row>
        </Section>
        <Section>
          <Grid minColumnWidth="400px">
            <div>
              <H level="1">UI Kit</H>
              <P className="margin-top">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dolores quo non dolor
                debitis mollitia voluptatem vero, culpa ratione? Accusantium iure labore itaque
                dignissimos reprehenderit distinctio et non iusto excepturi.
              </P>
            </div>
            <div>
              <H level="2">Heading 2</H>
              <P className="margin-top">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dolores quo non dolor
                debitis mollitia voluptatem vero, culpa ratione? Accusantium iure labore itaque
                dignissimos reprehenderit distinctio et non iusto excepturi.
              </P>
            </div>
            <div>
              <H level="3">Heading 3</H>
              <P className="margin-top">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dolores quo non dolor
                debitis mollitia voluptatem vero, culpa ratione? Accusantium iure labore itaque
                dignissimos reprehenderit distinctio et non iusto excepturi.
              </P>
            </div>
          </Grid>

          <Button type="featured">Featured Button</Button>
          <Button type="primary">Primary Button</Button>
          <Button type="secondary">Secondary Button</Button>
          <Button>Normal Button</Button>
          <H level="2">A Row of buttons</H>
          <Row>
            <Button type="small">Small button 1</Button>
            <Button type="small">Small button 2</Button>
            <Button type="small">Small button 3</Button>
          </Row>
          <H level="2">A Row of tags</H>
          <Row>
            <Tag>This is a tag</Tag>
            <Tag>tag</Tag>
            <Tag> tag two</Tag>
            <Tag>last tag</Tag>
          </Row>
        </Section>
        <Section>
          <H level="2">Cards</H>
          <Grid minColumnWidth="300px">
            <Card />
            <Card />
            <Card />
            <Card />
          </Grid>
        </Section>
        <Section>
          <H level="2">Alerts</H>
          <Alert type="success">This is a success message</Alert>
          <Alert type="warning">This is a waning message.</Alert>
          <Alert type="error">Opps. Something went wrong!</Alert>
          <Alert type="info">This message is just for your information.</Alert>
        </Section>
        <Section>
          <Panel minHeight="300px">
            <H level="2">This is Panel.</H>
            <P>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit voluptatem qui velit
              culpa consectetur rerum numquam, aliquam quam ea ipsam ratione optio iusto at ut quae
              dignissimos laudantium labore quas.
            </P>
          </Panel>
          <Panel minHeight="500px" imgSrc="img.jpg">
            <H level="2">This is a penel with a background image</H>
          </Panel>
        </Section>
      </Main>
      <Footer />
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  --heading-font: ${(props) => props.headingFont};
  --content-font: ${(props) => props.font};

  .margin-top {
    margin-top: 1rem;
  }
`;
