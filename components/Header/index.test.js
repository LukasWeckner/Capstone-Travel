import Header from ".";
import { render, screen } from "@testing-library/react";

test("renders correct heading in Header according to props", () => {
  render(<Header heading="Test Heading" />);
  const headingElement = screen.getByRole("heading", { name: /test heading/i });
  expect(headingElement).toBeInTheDocument();
});

test("renders BackArrow link when prop displayBackButton is true", () => {
  render(<Header displayBackButton href="/" />);
  const backArrowElement = screen.getByAltText("back arrow");
  expect(backArrowElement).toBeInTheDocument();
});

test("does not render BackArrow link when prop displayBackButton is false", () => {
  render(<Header displayBackButton={false} />);
  const backArrowElement = screen.queryByAltText("back arrow");
  expect(backArrowElement).not.toBeInTheDocument();
});
