import { formatDistance } from "date-fns";

export const relativeDate = (date) => {
  return formatDistance(new Date(date), new Date(), {
    addSuffix: true,
  });
};
