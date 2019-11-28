import axios from "axios"

export const fetchResults = async ( searchTerm: string ) => {
    try {
        const response = await axios.get(`https://itunes.apple.com/search?term=${searchTerm}&entity=album`)
        return response.data.results
    } catch (e) {
        return e
    }
}