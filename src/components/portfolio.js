import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Project from './project';
import { Section, SectionHeading } from '../styles/globalStyles';

const Portfolio = () => {
  const { projects } = useStaticQuery(graphql`
    query {
      projects: allFile(
        filter: { relativeDirectory: { eq: "projects" } }
        sort: { fields: childrenMdx___frontmatter___index }
      ) {
        nodes {
          childMdx {
            frontmatter {
              title
              year
              url
              source
              tags
              image {
                childImageSharp {
                  gatsbyImageData(width: 600, placeholder: BLURRED)
                }
              }
            }
            body
          }
        }
      }
    }
  `);

  return (
    <Section>
      <SectionHeading>Some of my work</SectionHeading>
      {projects?.nodes &&
        projects.nodes.map(({ childMdx }) => <Project childMdx={childMdx} />)}
    </Section>
  );
};

export default Portfolio;
