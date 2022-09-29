import axios from "axios"
import { ItemInterface } from "../types"

const API_URL = "https://jsonplaceholder.typicode.com"
axios.defaults.baseURL = API_URL

const fetchItems = async () => {
    return Promise.all([
        axios.get<ItemInterface[]>("/photos"),
        Promise.resolve([
            1100, 650, 840,
            2000, 910, 1350,
            1620, 760, 400,
            670, 800, 1040
        ])
    ])
}

export default fetchItems