import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Fade } from 'react-reveal';

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
              index
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
      <Fade>
        <SectionHeading>Some of my work</SectionHeading>
      </Fade>
      {projects?.nodes &&
        projects.nodes.map(({ childMdx }) => {
          const { frontmatter, body } = childMdx;
          const { index, title, year, url, source, tags, image } = frontmatter;
          const img = getImage(image);

          return (
            <Project
              key={index}
              title={title}
              year={year}
              url={url}
              source={source}
              tags={tags}
              img={img}
              body={body}
            />
          );
        })}
    </Section>
  );
};

export default Portfolio;
