import styled from "styled-components";

export default function Button({ onClick, children }) {
  return <StyledBasicButton onClick={onClick}>{children}</StyledBasicButton>;
}

export const StyledBasicButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
`;
