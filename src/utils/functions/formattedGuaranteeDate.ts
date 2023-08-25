import { format, parse } from "date-fns";

export const formattedGuaranteeDate = (date: string) => {
  const guaranteeDate = parse(date, "yyyy-MM-dd HH:mm:ss", new Date());
  return format(guaranteeDate, "dd / MM / yyyy");
};
