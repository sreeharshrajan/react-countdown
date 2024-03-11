export const calculateMilliseconds = (days, hours = null) => {
  const daysInMs = days * 24 * 60 * 60 * 1000;
  if (hours) {
    const hoursInMs = hours * 60 * 60 * 1000;
    return hoursInMs + daysInMs;
  } else {
    return daysInMs;
  }
};
