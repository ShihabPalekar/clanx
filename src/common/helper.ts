export const convertUnit = (unit: any, val: any) => {
  if (unit === "celcius") {
    return Math.round(val);
  } else {
    var fahrenheit = (val * 9) / 5 + 32;
    return Math.round(fahrenheit);
  }
};
