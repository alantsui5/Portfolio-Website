import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import {  Container, Div1, Div2, Div3, Brand, BrandIcon, BrandName, NavLink, SocialIcons } from './HeaderStyles';

export default function Header(){
  return (
    <Container>
      <Div1>
          <Brand href="/">
            <BrandIcon size="3rem" /> <BrandName>Portfolio</BrandName>
          </Brand>
      </Div1>
      <Div2>  
        <NavLink href="#projects">
          Projects
        </NavLink>
        <NavLink href="#technologies">
          Technologies
        </NavLink>
        <NavLink href="#about">
          About
        </NavLink>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
}