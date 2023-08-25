export const formattedPrice = (price: number) => {
  const parts = price.toString().split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1] || "";

  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    " "
  );

  let formattedDecimalPart = decimalPart;

  if (integerPart.length >= 4) {
    formattedDecimalPart = ` ${decimalPart}`;
  }

  return decimalPart
    ? `${formattedIntegerPart}.${formattedDecimalPart}`
    : formattedIntegerPart;
};
