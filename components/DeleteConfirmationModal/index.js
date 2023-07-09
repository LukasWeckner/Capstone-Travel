import styled from "styled-components";
import { StyledBasicButton } from "../Button";

export default function DeleteConfirmationModal({
  show,
  message,
  onCancel,
  onConfirm,
}) {
  if (!show) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalMessage>{message}</ModalMessage>
        <ContainerButtons>
          <YesButton onClick={onConfirm}>Yes</YesButton>
          <NoButton onClick={onCancel}>No</NoButton>
        </ContainerButtons>
      </ModalContainer>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background-color: var(--secondary-color);
  padding: 10px 20px 20px 20px;
  border-radius: 9px;
`;

const ModalMessage = styled.p`
  font-weight: 700;
`;

const ContainerButtons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
`;

const YesButton = styled(StyledBasicButton)`
  background-color: var(--header-footer-color);
  width: 3.5rem;
`;

const NoButton = styled(StyledBasicButton)`
  background-color: var(--delete-error-warning-color);
  width: 3.5rem;
`;
