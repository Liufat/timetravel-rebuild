const sortFilter = (newItems, type, sort) => {
  if (sort) {
    newItems.sort((a, b) => {
      return b[type] - a[type];
    });
  }
  if (!sort) {
    newItems.sort((a, b) => {
      return a[type] - b[type];
    });
  }
};

const sortByTime = (newItems, sort) => {
  if (sort) {
    newItems.sort((a, b) => {
      return new Date(b.orders_created_time) - new Date(a.orders_created_time);
    });
  }
  if (!sort) {
    newItems.sort((a, b) => {
      return new Date(a.orders_created_time) - new Date(b.orders_created_time);
    });
  }
};
// 4.使用filter和sort為items做排序
const itemsFilter = (items, type, sort, setState) => {
  const newItems = [...items];
  if (type === "date") {
    sortByTime(newItems, sort);
  }
  if (type === "id") {
    sortFilter(newItems, "uuid", sort);
  }
  if (type === "totalPrice") {
    sortFilter(newItems, "orders_total_price", sort);
  }
  setState(newItems);
};

export default itemsFilter;
