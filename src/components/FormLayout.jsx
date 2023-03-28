import { useContext, useEffect, useState } from "react"
import DataContext from "../context/DataContext"

const FormLayout = ({ visibility, setVisibility }) => {
	const [fields, setFields] = useState()
	const [filter, setFilter] = useState("")
	const [fieldsFiltered, setFieldsFiltered] = useState()
	const users = useContext(DataContext)
	useEffect(() => {
		if (users.users !== undefined) {
			setFields(Object.keys(users?.users[0]))
		}
	}, [users])

	useEffect(() => {
		if (filter !== "") {
			setFieldsFiltered(fields.filter((word, i) => word.match(filter)))
		} else {
			setFieldsFiltered(undefined)
		}
	}, [filter])

	const handleSubmit = (e) => {
		// e.prevent.default()
		// setVisibility("hidden")
	}
	const handleVisibility = () => {
		setVisibility("hidden")
	}

	return (
		<section
			className={`flex absolute justify-center items-center h-screen w-screen bg-slate-700 bg-opacity-40 ${visibility} `}
		>
			<form className='flex relative flex-col items-center justify-center h-1/2 w-1/4 bg-lime-900 rounded-2xl'>
				<input
					className='my-2 w-2/5 text-center'
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
				{fieldsFiltered !== undefined
					? fieldsFiltered?.map((x) => (
							<div className='flex justify-between w-1/3' key={x} id={x}>
								<label htmlFor={x} className='text-white'>
									{x}
								</label>
								<input type='checkbox' name={x} id={x} />
							</div>
					  ))
					: fields?.map((x) => (
							<div className='flex justify-between w-1/3' key={x} id={x}>
								<label htmlFor={x} className='text-white'>
									{x}
								</label>
								<input type='checkbox' name={x} id={x} />
							</div>
					  ))}

				<button
					className='py-1 px-4 bg-black text-white rounded-full mt-10'
					onClick={handleSubmit}
				>
					Apply
				</button>
			</form>
		</section>
	)
}
export default FormLayout
