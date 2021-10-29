import { Button } from "react-bootstrap";
import { useOrderDetails } from "../../context/OrderDetails";
import Option from "./Option";

export default function OrderEntry({ setOrderPhase }) {
  const [orderDetails] = useOrderDetails();

  // disable order button if there aren't any scoops in order
  const orderDisabled = orderDetails.totals.scoops === "$0.00";

  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Option optionType="scoops" />
      <Option optionType="toppings" />
      <br />
      <h2>Grand Total: {orderDetails.totals.grandTotal}</h2>
      <Button
        variant="primary"
        disabled={orderDisabled}
        onClick={() => setOrderPhase("review")}
      >
        Order Sundae!
      </Button>
    </div>
  );
}
