import styled, { css } from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: var(--primary-text-and-button-color);
  border-radius: 9px;

  ${({ variant }) =>
    variant === "cancel" &&
    css`
      background-color: var(--secondary-color);
      border: 1px solid var(--primary-text-and-button-color);
      color: var(--primary-text-and-button-color);
    `}
`;
