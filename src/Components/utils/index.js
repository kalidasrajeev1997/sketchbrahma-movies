export const stripChars = (value, maxLength) => {
  let modValue = "";
  if (typeof value === "string")
    modValue = value.toString().substring(0, maxLength || value.length);
  if (typeof value === "string" && value.length > maxLength) {
    modValue += "...";
  }
  return modValue;
};

export const convertRating = (value) => {
  return (value / 2).toFixed(1);
};
