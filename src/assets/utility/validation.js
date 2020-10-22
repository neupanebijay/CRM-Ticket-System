export const shortText = (str) => {
  return str.length >= 5 && str.length <= 40;
};
export const longText = (str) => {
  return str.length >= 10 && str.length <= 100;
};
