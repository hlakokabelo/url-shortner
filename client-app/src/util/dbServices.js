import axios from "axios"

const createShortUrl = async (originalUrl) => { }
const getAllUrl = async () => { 
    const {data} = await axios.get(`${import.meta.env.VITE_API_SHORTEN_URL}`); 
    console.log(data)
    return data.data   
}
const getUrl = async (shortId) => { }
const deleteUrl = async (id) => { } 


export {createShortUrl, getAllUrl, getUrl, deleteUrl};