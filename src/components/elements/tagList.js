import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../../styles/globalStyles';

const Tags = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Tag = styled.li`
  display: inline-block;
  font-size: 0.8em;
  font-weight: 600;
  padding: 2px 8px;
  margin: 0 4px;
  background-color: ${colors.green};
  border-radius: 999px;
  color: ${colors.background};
`;

const TagList = ({ tags }) => (
  <Tags>{tags && tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</Tags>
);

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TagList;
