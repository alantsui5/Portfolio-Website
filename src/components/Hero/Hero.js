import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

export default function Hero(props){
  return (
    <Section row padding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to  <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Familiar with JavaScript, React, Java, SQL
        </SectionText>
        <Button onClick={() => window.location = "https://alantsui-resume.netlify.app/"}>Click for Resume</Button>
      </LeftSection>
    </Section>
  );
}