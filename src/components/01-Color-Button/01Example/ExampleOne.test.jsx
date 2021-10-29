import ExampleOne from "./ExampleOne";
import { render, screen, fireEvent } from "@testing-library/react";

test("Button has correct initial color", () => {
  // rendering test component
  render(<ExampleOne />);

  // find an element with a role of button and text of 'Change to blue'
  const button = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(button).toHaveStyle({ backgroundColor: "red" });

  // Click Event
  fireEvent.click(button);

  // expect the background color to be blue
  expect(button).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Change to red'
  expect(button).toHaveTextContent("Change to red");
});
