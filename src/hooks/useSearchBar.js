import { useState, useEffect } from "react"

const useSearchBar = ({ isFiltered, filtersInactive, filter }) => {
	const [searchedFiltersInactive, setSearchedFiltersInactive] = useState()
	const [searchedFilters, setSearchedFilters] = useState()

	useEffect(() => {
		if (filter !== "") {
			setSearchedFilters(isFiltered.filter((word) => word.match(filter)))
			setSearchedFiltersInactive(
				filtersInactive.filter((word) => word.match(filter))
			)
		}
	}, [filter, isFiltered, filtersInactive])
	return { searchedFiltersInactive, searchedFilters }
}

export default useSearchBar
