import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { pricePerItem } from "../constants";
import { formatCurrency } from "../utilities";

const OrderDetails = createContext();

export const useOrderDetails = () => {
  const context = useContext(OrderDetails);

  if (!context) {
    throw new Error(
      "useOrderDetails must be used within an OrderDetailsProvider"
    );
  }

  return context;
};

function calculateSubtotal(optionType, optionCounts) {
  let countValue = 0;
  const getoptionType = optionCounts[optionType];

  // for (const [key, value] of getoptionType) {
  //   console.log(key, value);
  //   countValue += value;
  // }

  getoptionType.forEach((value, key) => (countValue += value));

  // for (const count of getoptionType.values()) {
  //   countValue += count;
  // }
  return countValue * pricePerItem[optionType];
}

export const OrderDetailsProvider = (props) => {
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });

  const zeroCurrency = formatCurrency(0);

  const [totals, setTotals] = useState({
    scoops: zeroCurrency,
    toppings: zeroCurrency,
    grandTotal: zeroCurrency,
  });

  useEffect(() => {
    const scoopsSubtotal = calculateSubtotal("scoops", optionCounts);
    const toppingsSubtotal = calculateSubtotal("toppings", optionCounts);
    const grandTotal = scoopsSubtotal + toppingsSubtotal;
    setTotals({
      scoops: formatCurrency(scoopsSubtotal),
      toppings: formatCurrency(toppingsSubtotal),
      grandTotal: formatCurrency(grandTotal),
    });
  }, [optionCounts]);

  const value = useMemo(() => {
    const updateItemCount = (itemName, newItemCount, optionType) => {
      // get option Map and make a copy
      let newOptionCounts = { ...optionCounts };

      // update the copied Map
      const updatedOptionType = newOptionCounts[optionType];
      updatedOptionType.set(itemName, parseInt(newItemCount));
      newOptionCounts[optionType] = updatedOptionType;
      // update state
      setOptionCounts(newOptionCounts);
    };

    const resetOrder = () => {
      setOptionCounts({
        scoops: new Map(),
        toppings: new Map(),
      });
    };

    return [{ ...optionCounts, totals }, updateItemCount, resetOrder];
  
  }, [optionCounts, totals]);

  return <OrderDetails.Provider value={value} {...props} />;
};
