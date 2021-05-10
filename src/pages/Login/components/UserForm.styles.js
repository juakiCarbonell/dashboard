import { Field } from 'formik';
import styled, { css } from 'styled-components';

export const FormWrapper = styled.section`
  font-size: 1rem;
  padding: 1rem 0.75rem;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;

export const Input = styled(Field)`
  display: block;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 100%;
  margin-top: 0.5rem;
  height: 3rem;

  ${({ error }) =>
    error &&
    css`
      border: 1px solid rgb(191, 49, 12);
      outline: none;
    `}
`;

export const InputWrapper = styled.div`
  margin-top: 1rem;
`;

export const Submit = styled.button`
  display: block;
  background-color: #6385ff;
  width: 100%;
  margin-top: 1.5rem;
  height: 3rem;
  color: white;
  border: none;
  cursor: pointer;

  &:active {
    background-color: #cfd9fc;
  }

  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;

export const StyledErrorMessage = styled.div`
  display: block;
  padding: 0.3rem 0.5rem;
  margin-top: 0.5rem;
  background-color: #ffbaba;
`;