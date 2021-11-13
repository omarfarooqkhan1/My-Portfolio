import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";

import { SectionTitle } from "../../styles/GlobalComponents";

import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <SectionTitle>Contact Info</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:omarfarooqkhan@outlook.com">
            omarfarooqkhan@outlook.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>&copy; M. Omar Farooq Khan - 2021</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            href="https://github.com/omarfarooqkhan1"
            target="_blank"
          >
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/m-omarfarooqkhan1/"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://facebook.com/momarfarooqkhan1"
            target="_blank"
          >
            <AiFillFacebook size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
