import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <head>
        <title>My Portfolio - M. Omar Farooq Khan</title>
        <meta
          name="description"
          content="I'm a final year Computer Science student who loves to develop full-stack mobile & web applications entirely from scratch, making use of latest Web Technologies."
        ></meta>
      </head>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
