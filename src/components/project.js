import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

import Link from './elements/link';
import TagList from './elements/tagList';
import { sizes, colors, StyledButton } from '../styles/globalStyles';

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

const Title = styled.span`
  color: ${colors.highlight};
  font-size: 1.25em;
`;

const Year = styled.span`
  padding: 1em;
`;

const Paragraph = styled.p`
  color: ${colors.primary};
  font-size: 1.25em;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${sizes.md}px) {
    justify-content: center;
  }
`;

const StyledFiExternalLink = styled(FiExternalLink)`
  margin-left: 5px;
`;

const StyledFiGithub = styled(FiGithub)`
  margin-right: 5px;
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;

const Project = ({ title, year, url, source, tags, img, body }) => {
  const components = {
    p: Paragraph,
    a: Link,
  };

  return (
    <Container>
      <ImgContainer>
        <StyledGatsbyImage image={img} alt={title} />
      </ImgContainer>
      <Content>
        <Fade>
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
              <StyledButton
                href={url}
                rel="noopener noreferrer"
                target="_blank"
              >
                Visit
                <StyledFiExternalLink />
              </StyledButton>
            )}
            {source && (
              <StyledButton
                href={source}
                rel="noopener noreferrer"
                target="_blank"
              >
                <StyledFiGithub />
                Source
              </StyledButton>
            )}
          </ButtonContainer>
        </Fade>
      </Content>
    </Container>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  url: PropTypes.string,
  source: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.object.isRequired /* eslint 'react/forbid-prop-types': 0 */,
  body: PropTypes.string.isRequired,
};

Project.defaultProps = {
  url: ``,
  source: ``,
};

export default Project;
