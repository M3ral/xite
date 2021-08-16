import {QueryProps} from "../types";

export const getUsedFilters = (initialFilters: QueryProps) => {
  const filters = Object.fromEntries(Object.entries(initialFilters).filter(([_, v]) => v.length > 0))
  return {filters}
}
