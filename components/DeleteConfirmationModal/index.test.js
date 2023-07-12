import DeleteConfirmationModal from ".";
import { fireEvent, render, screen } from "@testing-library/react";

test("does render Modal when show prop is true", () => {
  render(<DeleteConfirmationModal show message="Are you sure?" />);
  const modalOverlay = screen.getByText("Are you sure?");
  expect(modalOverlay).toBeInTheDocument();
});

test("does not render Modal when show prop is false", () => {
  render(<DeleteConfirmationModal show={false} message="Are you sure?" />);
  const modalOverlay = screen.queryByText("Are you sure?");
  expect(modalOverlay).not.toBeInTheDocument();
});

test("clicking the 'Yes' button triggers the onConfirm function", () => {
  // mock function
  const onConfirmMock = jest.fn();

  render(<DeleteConfirmationModal show onConfirm={onConfirmMock} />);
  const yesButton = screen.getByRole("button", { name: "Yes" });
  fireEvent.click(yesButton);
  expect(onConfirmMock).toHaveBeenCalled();
});

test("clicking the 'No' button triggers the onCancel function", () => {
  const onCancelMock = jest.fn();

  render(<DeleteConfirmationModal show onCancel={onCancelMock} />);
  const noButton = screen.getByRole("button", { name: "No" });
  fireEvent.click(noButton);
  expect(onCancelMock).toHaveBeenCalled();
});
