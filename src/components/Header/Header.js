import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Brand, Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

export default function Header(){
  return (
    <Container>
      <Div1>
        <Link href="/">
          <Brand>
            <DiCssdeck /> <span>Portfolio</span>
          </Brand>
        </Link>
      </Div1>
      <Div2>  
        <NavLink href="#projects">
          Projects
        </NavLink>
        <NavLink href="#technologies">
          Technologies
        </NavLink>
        <NavLink href="#about">
          About Me
        </NavLink>
        {/*

        
      */}
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