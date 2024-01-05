const useCountDay = (startDate, endDate) => {
  const result = (new Date(endDate) - new Date(startDate)) / (1000 * 3600 * 24);
  return result;
};

export default useCountDay;
