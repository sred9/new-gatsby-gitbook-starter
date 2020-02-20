import React from "react";
import styled from "@emotion/styled";
import { MDXProvider } from "@mdx-js/react";
import ThemeProvider from "./themeProvider";
import mdxComponents from "./mdxComponents";
import Sidebar from "./sidebar";
import RightSidebar from "./rightSidebar";

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Content = styled('main')`
  display: flex;
  flex-grow: 1;
  margin: 0px 1rem;
  margin-top: 3rem;
  width:58.333333%;

  @media only screen and (max-width: 1023px) {
    padding-left: 0;
    margin: 0 10px;
    margin-top: 3rem;
  }
`;

const MaxWidth = styled('div')`

  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;
const LeftSideBarWidth = styled('div')`
  width: 16.666667%;
`;
const RightSideBarWidth = styled('div')`
  width: 25%;
`;
const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <Wrapper>
        <LeftSideBarWidth className={'hiddenMobile'}>
          <Sidebar location={location} />
        </LeftSideBarWidth>
        <Content>
          <MaxWidth>{children}</MaxWidth>
        </Content>
        <RightSideBarWidth className={'hiddenMobile'}>
          <RightSidebar location={location} />
        </RightSideBarWidth>
      </Wrapper>
    </MDXProvider>
  </ThemeProvider>
);

export default Layout;
