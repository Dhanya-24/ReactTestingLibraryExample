import { useState } from "react";
import Container from "react-bootstrap/Container";
import OrderEntry from "./components/02-Sundaes-On-Demand/Pages/Entry/OrderEntry";
import { OrderDetailsProvider } from "./components/02-Sundaes-On-Demand/context/OrderDetails";
import OrderSummary from "./components/02-Sundaes-On-Demand/Pages/Summary/OrderSummary";
import OrderConfirmation from "./components/02-Sundaes-On-Demand/Pages/confirmation/OrderConfirmation";
import "./App.css";

function App() {
  const [orderPhase, setOrderPhase] = useState("inProgress");

  let Component = OrderEntry; // default to order page
  switch (orderPhase) {
    case "inProgress":
      Component = OrderEntry;
      break;
    case "review":
      Component = OrderSummary;
      break;
    case "completed":
      Component = OrderConfirmation;
      break;
    default:
  }

  return (
    <OrderDetailsProvider>
      <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
    </OrderDetailsProvider>
  );
}

export default App;
