import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: 20,
          }}
        >
          <DiCssdeck size="3rem" /> <span>Personal Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <a
          href="https://drive.google.com/file/d/1rBz1Z1TMYqRIi0f99pyOvQJc_DkFU7Jx/view"
          target="_blank"
        >
          <NavLink>Resume</NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/omarfarooqkhan1" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/m-omarfarooqkhan1/"
        target="_blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://facebook.com/momarfarooqkhan1" target="_blank">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
