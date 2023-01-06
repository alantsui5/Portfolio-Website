import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



export default function Projects(){
  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(({id, image, title, description}) =>(
          <BlogCard key={id}>
            <Img src={image}/>
            <TitleContent>
              <HeaderThree>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>
              {description}
            </CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <tagList>
                {tags.map((tag, i)=>(
                  <Tag key={i}> {tag} </Tag>
                ))}
              </tagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>Visit</ExternalLinks>
              <ExternalLinks href={source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
}