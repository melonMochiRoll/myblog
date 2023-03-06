import React, { FC } from 'react';
import styled from '@emotion/styled';

type MenuButtonProps = {
  buttonName: string;
  children: React.ReactNode;
  color?: string;
}

const MenuButton: FC<MenuButtonProps> = ({
  buttonName,
  children,
  color = '#d9f4d1',
}) => {
  return (
    <Button color={color}>
      {children}
      {buttonName}
    </Button>
  )
}

export default MenuButton;

const Button = styled.button<{color?: string}>`
  width: 160px;
  padding: 0.5rem 1.5rem;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  border: none;
  border-radius: 12px;
  background-color: ${({ color }) => color};
  cursor: pointer;
  gap: 1rem;

  &:hover {
    background-color: #d9fad1;
  }
`;