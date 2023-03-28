import { useContext, useState } from "react"
import { FilterContext } from "../context/MainContext"
import ButtonsCol from "./ButtonsCol"
import useSearchBar from "../hooks/useSearchBar"

const FormLayout = ({ visibility, setVisibility }) => {
	const { isFiltered, setIsFiltered, filtersInactive, setFiltersInactive } =
		useContext(FilterContext)
	const handleVisibility = () => {
		setVisibility("hidden")
	}
	const [filter, setFilter] = useState("")

	const { searchedFiltersInactive, searchedFilters } = useSearchBar({
		filter,
		isFiltered,
		filtersInactive,
	})

	const handleFilters = (e) => {
		const newFilters = [...isFiltered]
		const newInactiveFilters = [...filtersInactive]
		const valueCheck = e.target.value
		const isActive = newFilters.find((x) => x === valueCheck)
		if (!isActive) {
			const index = filtersInactive.indexOf(valueCheck)
			setIsFiltered([...newFilters, valueCheck])
			setFiltersInactive(
				newInactiveFilters.filter(
					(x) => newInactiveFilters.indexOf(x) !== index
				)
			)
		} else {
			const index = isFiltered.indexOf(valueCheck)
			setFiltersInactive([...newInactiveFilters, valueCheck])
			setIsFiltered(newFilters.filter((x) => newFilters.indexOf(x) !== index))
		}
	}

	return (
		<section
			className={`flex absolute justify-center items-center h-screen w-screen bg-slate-700 bg-opacity-40 ${visibility} `}
		>
			<form className='flex relative flex-col items-center justify-between h-7/8 w-1/2 bg-lime-700 rounded-2xl py-4'>
				<input
					className='my-2 w-2/5 text-center h-8 rounded-full'
					type='text'
					onChange={(e) => setFilter(e.target.value)}
					value={filter}
					placeholder='Search between filters'
				/>
				<button
					type='button'
					className='absolute top-0 right-0 m-2 leading-3 p-2 bg-black text-white rounded-md'
					onClick={handleVisibility}
				>
					X
				</button>
				<div className='flex w-full gap-4 py-4 px-6 text-center text-lg'>
					<div className='flex flex-col w-full'>
						<p className='bg-white'>Available Columns</p>
						<ButtonsCol
							buttonsText={
								filter === "" ? filtersInactive : searchedFiltersInactive
							}
							handleFilters={handleFilters}
						/>
					</div>
					<div className='flex flex-col w-full'>
						<p className='bg-white'>Selected Columns</p>
						<ButtonsCol
							buttonsText={filter === "" ? isFiltered : searchedFilters}
							handleFilters={handleFilters}
						/>
					</div>
				</div>
				<button
					type='button'
					className='py-1 px-4 bg-black text-white rounded-full mt-10'
					onClick={handleVisibility}
				>
					Apply
				</button>
			</form>
		</section>
	)
}
export default FormLayout
