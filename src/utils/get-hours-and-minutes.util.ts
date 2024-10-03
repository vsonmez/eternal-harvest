const getHoursAndMinutes = () => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
};

export default getHoursAndMinutes;
