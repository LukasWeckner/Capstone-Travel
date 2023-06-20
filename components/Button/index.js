import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return <BasicButton onClick={onClick}>{children}</BasicButton>;
};
const BasicButton = styled.button`
  padding: 10px 20px;
  background-color: #f2d5a3;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default BasicButton;
