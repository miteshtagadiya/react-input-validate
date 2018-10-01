export const validate = value => {
  if (value === "Infinity" || value === Infinity) {
    return "-";
  } else if (
    isNaN(value) ||
    value === "NaN" ||
    value === NaN ||
    value === undefined ||
    value === "undefined" ||
    value === null
  ) {
    return "N/A";
  } else {
    return value;
  }
};


export const validateSign = (value, returnString) => {
  if (value === "Infinity" || value === Infinity) {
    return "";
  } else if (
    isNaN(value) ||
    value === "NaN" ||
    value === NaN ||
    value === undefined ||
    value === "undefined" ||
    value === null ||
    value === NULL ||
    value === "NULL" ||
    value === "null"
  ) {
    return "";
  } else {
    return returnString;
  }
};
