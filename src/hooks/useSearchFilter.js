import { useSearch } from "../context/SearchContext";

export default function useSearchFilter(items = []) {
  const { searchState } = useSearch();

  // console.log(items);

  if (searchState.filter.destination !== "全部") {
    const showItems = items.filter((item) =>
      item.city_name.includes(searchState.filter.destination)
    );

    return showItems.filter((item) => {
      return item.product_name.includes(searchState.filter.keyword);
    });
  } else {
    return items.filter((item) => {
      return item.product_name.includes(searchState.filter.keyword);
    });
  }
}
