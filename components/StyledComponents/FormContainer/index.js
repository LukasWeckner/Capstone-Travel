import styled, { css } from "styled-components";

export const FormContainer = styled.div`
  margin: auto;
  margin-top: 2.5rem;
  background: #fff;
  border-radius: 1rem;
  width: 90%;
  padding: 0.5rem 1rem;
  box-shadow: 2px 5px 10px -7px #000000, 0px -2px 10px -7px #000000;

  ${({ variant }) =>
    variant === "new-trip" &&
    css`
      margin-top: 1.5rem;
    `}
`;
