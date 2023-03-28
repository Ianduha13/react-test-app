import { useContext } from "react"
import DataContext from "../context/DataContext"

const Dashboard = ({ setVisibility, isFiltered }) => {
	const users = useContext(DataContext)
	const dataIterable = users?.users
	if (dataIterable) {
		const filteredData = dataIterable.map((x) =>
			Object.keys(x).filter((word, i) => word.match(isFiltered[i]))
		)
		console.log(filteredData)
	}

	return (
		<section className='flex flex-col w-fit'>
			<button
				className='self-start my-1 py-1 px-4 bg-white rounded-full'
				onClick={() => setVisibility("absolute")}
			>
				Filters
			</button>
			<table className='border w-full h-full text-white'>
				<thead>
					<tr className='bg-white text-black'>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
					</tr>
				</thead>
				{dataIterable?.map((x) => (
					<tbody key={x.id}>
						<tr className='bg-lime-900'>
							<th className='border px-4 py-2'>{x.id}</th>
							<th className='border px-4 py-2'>{x.name}</th>
							<th className='border px-4 py-2'>{x.email}</th>
							<th className='border px-4 py-2'>{x.phone}</th>
						</tr>
					</tbody>
				))}
			</table>
		</section>
	)
}
export default Dashboard
