import axios from "axios"

const apiUrl = "https://jsonplaceholder.typicode.com/users"

const dataService = async () => {
	try {
		let response = await axios.get(apiUrl)
		const data = response.data
		return data
	} catch (err) {
		console.error(err)
		return
	}
}

export default dataService
