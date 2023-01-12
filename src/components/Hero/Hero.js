import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, ButtonLink } from './HeroStyles';
import {BiChevronsDown} from 'react-icons/bi';

export default function Hero(){
  return (
    <Section row padding>
      <LeftSection>
        <SectionTitle main center>
          Hi There, <br />
          I am Alan Tsui
        </SectionTitle>
        <SectionText>
         Thrive to work on end-to-end projects which develop sustainable and scalable financial and technical systems to create impact. <br />
         Have hands-on experience on JavaScript, Testing, Product Design, Data Analysis.
        </SectionText>
        <Button>
            <ButtonLink href="#projects" scroll={false}>
            Learn More <BiChevronsDown size="3rem"/>
            </ButtonLink>
        </Button>
      </LeftSection>
      
    </Section>
  );
}