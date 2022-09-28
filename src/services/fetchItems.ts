import axios from "axios"
import { ItemInterface } from "../types"

const API_URL = "https://jsonplaceholder.typicode.com"
axios.defaults.baseURL = API_URL

async function fetchItems() {
    return Promise.all([
        axios.get<ItemInterface[]>("/photos"),
        Promise.resolve([
            "$ 1 100", "$ 650", "$ 840",
            "$ 2 000", "$ 910", "$ 1 350",
            "$ 1 620", "$ 760", "$ 400",
            "$ 670", "$ 800", "$ 1 040"
        ])
    ])
}

export default fetchItems