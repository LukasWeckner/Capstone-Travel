import styled from "styled-components";

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
      <p>Do you really want to delete this trip?</p>
      <div>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
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
