import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import styled from 'styled-components';

import Link from './elements/link';
import TagList from './elements/tagList';
import Button from './elements/button';
import { sizes, colors } from '../styles/globalStyles';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 2em;
  padding-bottom: 2em;

  @media (max-width: ${sizes.md}px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  max-width: 45%;

  @media (max-width: ${sizes.md}px) {
    max-width: 100%;
  }
`;

const Content = styled.div`
  max-width: 55%;
  padding-left: 1em;
  padding-right: 1em;

  @media (max-width: ${sizes.md}px) {
    max-width: 100%;
  }
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  color: ${colors.highlight};
  font-size: 1.25em;
`;

const Year = styled.span`
  color: ${colors.secondary};
  padding: 1em;
`;

const Paragraph = styled.p`
  color: ${colors.primary};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${sizes.md}px) {
    justify-content: center;
  }
`;

const Project = ({ childMdx }) => {
  const { frontmatter, body } = childMdx;
  const { title, year, url, source, tags, image } = frontmatter;
  const img = getImage(image);

  const components = {
    p: Paragraph,
    a: Link,
  };

  return (
    <Container>
      <ImgContainer>
        <GatsbyImage image={img} alt="ADI Printing" />
      </ImgContainer>
      <Content>
        <Heading>
          <Title>{title}</Title>
          <Year>{year}</Year>
        </Heading>
        <TagList tags={tags} />
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
        <ButtonContainer>
          {url && (
            <Button href={url}>
              Visit&nbsp;
              <FiExternalLink />
            </Button>
          )}
          {source && (
            <Button href={source}>
              <FiGithub />
              &nbsp;Source
            </Button>
          )}
        </ButtonContainer>
      </Content>
    </Container>
  );
};

Project.propTypes = {
  childMdx: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      url: PropTypes.string,
      source: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      image:
        PropTypes.object.isRequired /* eslint 'react/forbid-prop-types': 0 */,
    }).isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
