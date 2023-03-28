import React, { useState, createContext } from "react"

export const DataContext = React.createContext()

export const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
	const [isFiltered, setIsFiltered] = useState([
		"id",
		"name",
		"username",
		"phone",
	])
	const [filtersInactive, setFiltersInactive] = useState([
		"address",
		"email",
		"website",
		"company",
	])

	return (
		<FilterContext.Provider
			value={{ isFiltered, setIsFiltered, filtersInactive, setFiltersInactive }}
		>
			{children}
		</FilterContext.Provider>
	)
}
