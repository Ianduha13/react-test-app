import { useContext, useEffect, useState } from "react"
import { DataContext, FilterContext } from "../context/MainContext"

const Dashboard = ({ setVisibility }) => {
	const { isFiltered } = useContext(FilterContext)
	const users = useContext(DataContext)
	const dataIterable = users?.users
	const [dataFiltered, setDataFiltered] = useState([])

	useEffect(() => {
		const newdata = dataIterable?.map((el) =>
			Object.keys(el)
				.filter((key) => isFiltered.includes(key))
				.reduce((acc, key) => {
					if (typeof el[key] === "object" && el[key] !== null) {
						return acc
					} else {
						acc[key] = el[key]
						return acc
					}
				}, {})
		)
		setDataFiltered(newdata)
	}, [isFiltered, dataIterable])

	const fields =
		dataFiltered && dataFiltered.length > 0 ? Object.keys(dataFiltered[0]) : []

	return (
		<section className='flex flex-col w-fit'>
			<button
				className='self-start my-1 py-1 px-4 bg-white rounded-full'
				onClick={() => setVisibility("absolute")}
			>
				Select Columns
			</button>
			<table className='border w-full h-full text-white'>
				<thead>
					<tr className='bg-white text-black'>
						{fields.map((x) => (
							<th key={x}>{x.toUpperCase()}</th>
						))}
					</tr>
				</thead>
				{dataFiltered?.map((x, i) => (
					<tbody key={i}>
						<tr className='bg-lime-900'>
							{Object.keys(x).map((key, i) => (
								<th key={i} className='border px-4 py-2'>
									{x[key]}
								</th>
							))}
						</tr>
					</tbody>
				))}
			</table>
		</section>
	)
}
export default Dashboard
