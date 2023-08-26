export const formattedPrice = (price: number) => {
  const parts = price.toString().split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1] || "";

  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    " "
  );

  let formattedDecimalPart = decimalPart;

  if (parseInt(integerPart) >= 1000 && decimalPart) {
    formattedDecimalPart =
      decimalPart.length > 2
        ? ` ${decimalPart.substring(0, 2)}`
        : ` ${decimalPart}`;
  }

  return formattedDecimalPart
    ? `${formattedIntegerPart}.${formattedDecimalPart}`
    : formattedIntegerPart;
};
