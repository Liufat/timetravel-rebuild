export default function useCountPages(items = [], itemsPerPage, nowPage) {
  return {
    items: items.slice((nowPage - 1) * itemsPerPage, nowPage * itemsPerPage),
    totalPages: Math.ceil(items.length / itemsPerPage),
  };
}
