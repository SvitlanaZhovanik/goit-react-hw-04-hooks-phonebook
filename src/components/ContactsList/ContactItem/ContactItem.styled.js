import styled from 'styled-components';

export const Item = styled.li`
  margin: 10px 8px;
  padding: 7px;
  border: thick double #32a1ce;
  border-radius: 12px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Name = styled.span`
  margin-right: 8px;
  font-size: 18px;
  font-weight: bold;
  color: #3f51b5;
  min-width: 120px;
`;

export const Button = styled.button`
  border: none;
  background-color: #ffffff;
  padding: 7px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #3f51b5;
`;
