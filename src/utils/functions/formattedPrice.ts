export const formattedPrice = (price: number) => {
  const parts = price.toString().split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1] || "";

  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    " "
  );

  let formattedDecimalPart = decimalPart;

  if (parseInt(integerPart) >= 1000) {
    formattedDecimalPart = ` ${decimalPart.substring(0, 2)}`;
  }

  return formattedDecimalPart
    ? `${formattedIntegerPart}.${formattedDecimalPart}`
    : formattedIntegerPart;
};
