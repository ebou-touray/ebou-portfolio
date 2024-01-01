import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the Software Testing world.
      From Robot Framework to Cypress JavaScript.
    </SectionText>
    <List>
      <ListItem>
       
        <ListContainer>
          <ListTitle>Test Automation</ListTitle>
          <ListParagraph>
            Experience with <br />
            Robot Framework <br /> Cypress JavaScript  <br /> Jira- X-ray/Zephyr  <br /> Postman for API Testing  <br />Azure DevOps  <br />Git  | GitHub | GitLab  <br /> Docker | Jenkins
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        
        <ListContainer>
          <ListTitle>Manual Testing</ListTitle>
          <ListParagraph>
            Experience with <br />
            Black-Box Testing  <br /> White-Box Testing  <br /> Unit Testing  <br /> Integration Testing  <br />System Testing  <br /> Usability Testing  <br /> User Acceptance Testing
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, <br /> Node.js   <br />Express.js  <br />HTML5 <br /> CSS3  <br /> Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
