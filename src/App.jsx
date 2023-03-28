import { useContext, useState, createContext, useEffect } from "react"
import dataService from "./services/dataService"
import Dashboard from "./pages/Dashboard"
import DataContext from "./context/DataContext"
import FormLayout from "./components/FormLayout"

const App = () => {
	const [users, setUsers] = useState()
	const [isFiltered, setIsFiltered] = useState(["id", "name", "email", "phone"])
	const [visibility, setVisibility] = useState("hidden")
	useEffect(() => {
		dataService().then((res) => setUsers(res))
	}, [])

	return (
		<DataContext.Provider value={{ users }}>
			<div className='App w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-700 to-indigo-700'>
				<Dashboard
					setVisibility={setVisibility}
					isFiltered={isFiltered}
					setIsFiltered={setIsFiltered}
				/>
				<FormLayout visibility={visibility} setVisibility={setVisibility} />
			</div>
		</DataContext.Provider>
	)
}

export default App
