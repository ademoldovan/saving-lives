export const getBooleanFromString = (string) =>
  string === "true" ? true : false;
export const parseDate = (date) => {
  let newDate = new Date(date);
  return (
    newDate.getDate() +
    "/" +
    (newDate.getMonth() + 1) +
    "/" +
    newDate.getFullYear()
  );
};
