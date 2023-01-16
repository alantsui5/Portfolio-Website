import React from 'react';
import { DiFirebase, DiPython, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

export default function Technologies(){
  return (
    <Section id="technologies">
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of web technologies in the web development world.
        From Frontend to Data Analysis.
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>Experience with React and Vue</ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>Experience with SQL and Java Spring, ELK</ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiPython size="3rem" />
          <ListContainer>
            <ListTitle>Data Analysis</ListTitle>
            <ListParagraph>Experience with Python, Excel, Clickhouse</ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  )
}
