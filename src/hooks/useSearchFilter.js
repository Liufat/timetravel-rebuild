import { useSearch } from "../context/SearchContext";

export default function useSearchFilter(items = []) {
  const { searchState } = useSearch();

  if (searchState.filter.destination !== "全部") {
    const showItems = items.filter((food) =>
      food.city_name.includes(searchState.filter.destination)
    );
    return showItems;
  } else {
    return items;
  }
}
