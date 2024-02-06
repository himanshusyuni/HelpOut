import CurrencyInput from "react-currency-input-field";

const AmountInput = () => {
  return (
    <div>
      <CurrencyInput
        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-xl"
        id="input-example"
        name="input-name"
        placeholder="Help compensation"
        decimalsLimit={2}
        allowNegativeValue={false}
        prefix="₹ "
        intlConfig={{ locale: "en-IN", currency: "INR" }}
        onValueChange={(value, name, values) =>
          console.log(value, name, values)
        }
      />
    </div>
  );
};

export default AmountInput;
