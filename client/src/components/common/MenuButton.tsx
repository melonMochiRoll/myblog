import React, { FC } from 'react';
import styled from '@emotion/styled';

type MenuButtonProps = {
  children: React.ReactNode;
}

const MenuButton: FC<MenuButtonProps> = ({
  children,
}) => {
  return (
    <Button>
      {children}
    </Button>
  )
}

export default MenuButton;

const Button = styled.button`
  width: 10rem;
  padding: 0 1.5rem;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 12px;
  background-color: #d9f4d1;
  cursor: pointer;
  gap: 1rem;

  &:hover {
    background-color: #d9fad1;
  }
`;