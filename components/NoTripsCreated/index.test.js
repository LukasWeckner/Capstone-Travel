import NoTripsCreated from ".";
import { fireEvent, render, screen } from "@testing-library/react";

test("renders welcome message as heading", () => {
  render(<NoTripsCreated />);
  const welcomeMessage = screen.getByRole("heading", {
    name: "Welcome to journAI!",
  });
  expect(welcomeMessage).toBeInTheDocument();
});

test("renders both options for trip creation as links", () => {
  render(<NoTripsCreated />);

  const aiCreationOptionText = screen.getByText(
    "Let AI Idea Generator create a trip"
  );
  const aiLink = aiCreationOptionText.closest("a");
  expect(aiLink).toBeInTheDocument();

  const manualOptionText = screen.getByText("Manually create your own trip");
  const manualLink = manualOptionText.closest("a");
  expect(manualLink).toBeInTheDocument();
});

test("clicking the text link of the two trip creation options, redirects the user to the according page defined in the href ", () => {
  // Define Mocklink component as nextjs Link can't be tested directly
  const MockLink = ({ href, children }) => {
    return <a href={href}>{children}</a>;
  };
  // render tested component with MockLink
  render(<NoTripsCreated Link={MockLink} />);

  // access text link
  const aiCreationOptionText = screen.getByText(
    "Let AI Idea Generator create a trip"
  );
  const aiLink = aiCreationOptionText.closest("a");

  // simulate users click on link
  fireEvent.click(aiLink);

  expect(aiLink.getAttribute("href")).toBe("/idea-generator");

  // same for second option (manual)
  const manualCreationOptionText = screen.getByText(
    "Manually create your own trip"
  );
  const manualLink = manualCreationOptionText.closest("a");
  fireEvent.click(manualLink);
  expect(manualLink.getAttribute("href")).toBe("/new-trip");
});
