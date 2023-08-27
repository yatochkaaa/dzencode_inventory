import { format, parse } from "date-fns";
import { ru } from "date-fns/locale";

export const formattedOrderDate = (date: string) => {
  const orderDate = parse(date, "yyyy-MM-dd HH:mm:ss", new Date());
  const formattedDate = format(orderDate, "dd / MMM / yyyy", { locale: ru });
  const parts = formattedDate.split(" ");

  parts[2] = parts[2].charAt(0).toUpperCase() + parts[2].slice(1);

  if (parts[2].length > 3) {
    parts[2] = parts[2].substring(0, 3);
  }

  return parts.join(" ");
};
