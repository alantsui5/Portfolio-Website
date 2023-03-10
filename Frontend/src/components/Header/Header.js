import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillMediumSquare, AiFillLinkedin } from 'react-icons/ai';
import { TbLetterA, TbLetterT } from 'react-icons/tb';
import {  Container, Div1, Div2, Div3, Brand, BrandIcon, BrandName, NavLink, SocialIcons } from './HeaderStyles';

export default function Header(){
  return (
    <Container>
      <Div1>
          <Brand href="/">
            <BrandIcon>
              AT.
            </BrandIcon>
             <BrandName>Portfolio</BrandName>
          </Brand>
      </Div1>
      <Div2>  
        <NavLink href="/#projects" scroll={false}>
          Projects
        </NavLink>
        <NavLink href="/#technologies" scroll={false}>
          Technologies
        </NavLink>
        <NavLink href="/#about" scroll={false}>
          About
        </NavLink>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/alantsui5">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/alan-tsui-5009061a3/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://dev.to/alantsui5">
          <AiFillMediumSquare size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
}