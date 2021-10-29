import React from "react";
import { Form, OverlayTrigger, Popover, Button } from "react-bootstrap";

export default function SummaryForm({ setOrderPhase }) {
  const [tcChecked, setTcChecked] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    // pass along to the next phase.
    // The next page will handle submitting order from context.
    setOrderPhase("completed");
  }

  const popover = (
    <Popover style={{ color: "blue" }} id="termsandconditions-popover">
      No ice cream will actually be delivered
    </Popover>
  );

  const checkboxLabel = (
    <span style={{ color: "black" }}>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <br />
      <Button variant="primary" type="submit" disabled={!tcChecked}>
        Confirm order
      </Button>
    </Form>
  );
}
