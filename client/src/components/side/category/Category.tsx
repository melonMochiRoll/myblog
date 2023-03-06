import React, { FC } from 'react';
import styled from '@emotion/styled';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import { Tag } from 'Components/side/category/CategoryList';
import CategoryItem from 'Components/side/category/CategoryItem';


type CategoryProps = {
  list: Tag[],
}

const Category: FC<CategoryProps> = ({ list }) => {
  return (
    <Wrapper>
      <CategoryTitle>
        <ListIcon fontSize='small' />
        {list[0].category}
      </CategoryTitle>
      {
        list.map((tag: Tag, i: number) => 
          <CategoryItem tag={tag} key={i}/>
        )
      }
    </Wrapper>
  )
}

export default Category;

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #999999;
  padding: 5px 5px 10px;

  svg {
    margin-right: 12px;
  }
`;