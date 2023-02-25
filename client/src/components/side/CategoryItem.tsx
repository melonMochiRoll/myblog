import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Tag } from 'Components/side/CategoryList';

type CategoryItemProps = {
  tag: Tag,
}

const CategoryItem: FC<CategoryItemProps> = ({ tag }) => {
  return (
    <ListItem>
      {tag.name}
      <span>{tag.count}</span>
    </ListItem>
  )
}

export default CategoryItem;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 26px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;

  &:hover {
    background-color: rgba(0,0,0,0.06);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  span {
    min-width: 2rem;
    color: #0a5105;
    padding: 3px 8px;
    border-radius: 6px;
    background-color: #d9f4d1;
    font-size: 13px;
    font-weight: 700;
    text-align: center;
  }
`;