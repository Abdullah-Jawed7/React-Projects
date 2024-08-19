import React, { useId } from "react";
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  className = "",
}) {
  const amountInputID = useId();
  return (
    <div className={`bg-white p-3 rounded-lg test-sm- flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputID}
          className="text-black/40 mb-2
       inline-block"
        />
        {label}
        <input
          id={amountInputID}
          type="number"
          placeholder="Amount"
          className="outline-none w-full 
      bg-transparent py-1.5"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div
        className="w-1/2 flex flex-wrap
       justify-end text-right"
      >
        <p className="mb-2 w-full text-black/40">Currency Type</p>
        <select
          name=""
          id=""
          className="rounded-lg px-1 py-1 
        bg-gray-100 cursor-pointer"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default InputBox;
