import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("Initial Condition", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /Terms and Conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const button = screen.getByRole("button", {
    name: /Confirm order/i,
  });
  expect(button).toBeDisabled();
});

test("Checkbox enables button on first click and disables on second click", () => {
  render(<SummaryForm />);
  const checkBox = screen.getByRole("checkbox", {
    name: /Terms and Conditions/i,
  });
  const button = screen.getByRole("button", {
    name: /Confirm order/i,
  });

  userEvent.click(checkBox);
  expect(button).toBeEnabled();

  userEvent.click(checkBox);
  expect(button).toBeDisabled();
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);

  // popover starts out hidden
  // Use Query ( queryByText ) instead of get for the elements not present in DOM
  const Nullpopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(Nullpopover).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  userEvent.unhover(termsAndConditions);
  //expect(Nullpopover).not.toBeInTheDocument();
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
