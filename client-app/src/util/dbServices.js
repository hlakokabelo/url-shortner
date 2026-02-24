import axios from "axios"

const createShortUrl = async (originalUrl) => { }
const getAllUrl = async () => { 
    const response = await axios.get(`${process.env.VITE_API_URL}`);    
}
const getUrl = async (shortId) => { }
const deleteUrl = async (id) => { } 


export {createShortUrl, getAllUrl, getUrl, deleteUrl};