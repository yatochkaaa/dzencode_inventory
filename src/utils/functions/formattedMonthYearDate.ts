import { format, parse } from "date-fns";

export const formattedMonthYearDate = (date: string) => {
  const orderDate = parse(date, "yyyy-MM-dd HH:mm:ss", new Date());
  return format(orderDate, "MM / yy");
};
