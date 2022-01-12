import styled from 'styled-components';

export const WrapperForm = styled.form`
  display: block;
  width: 300px;
  padding: 20px;
  margin: 30px;
  border: thick double #32a1ce;
  border-radius: 12px;
`;

export const Label = styled.label`
  font-size: 16px;
  vertical-align: middle 
  display: block;
  margin-bottom: 15px;
  margin-left: 7px;
`;

export const Input = styled.input`
  display: block;
  width: 200px;
  padding: 10px;
  margin: 10px 0;
  border: 0;
  border-bottom: 1px solid #32a1ce;
  outline: none;
`;

export const ButtonForm = styled.button`
  padding: 10px;
  border: none;
  background-color: #32a1ce;
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
  width: 50%;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #3f51b5;
  }
`;
