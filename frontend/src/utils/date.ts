const ageFromDate = (date: Date) => {
  return Math.abs(date.getFullYear() - new Date().getFullYear());
};
const formatDate = (date: Date) => {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

export { ageFromDate, formatDate };
