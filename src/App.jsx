import { useState, useEffect } from "react"
import dataService from "./services/dataService"
import Dashboard from "./pages/Dashboard"
import { DataContext, FilterProvider } from "./context/MainContext"
import FormLayout from "./components/FormLayout"

const App = () => {
	const [users, setUsers] = useState()
	const [visibility, setVisibility] = useState("hidden")
	useEffect(() => {
		dataService().then((res) => setUsers(res))
	}, [])

	return (
		<DataContext.Provider value={{ users }}>
			<FilterProvider>
				<div className='App w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-700 to-indigo-700'>
					<Dashboard setVisibility={setVisibility} />
					<FormLayout visibility={visibility} setVisibility={setVisibility} />
				</div>
			</FilterProvider>
		</DataContext.Provider>
	)
}

export default App
