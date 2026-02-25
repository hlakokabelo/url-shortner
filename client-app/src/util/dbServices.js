import axios from "axios";

const createShortUrl = async (fullUrl, alias) => {
  const payload = {
    fullUrl,
    alias,
  };
  const response = await axios.post(`${import.meta.env.VITE_API_SHORTEN_URL}`, {
    ...payload,
  });
  console.log(response);
  return response.data._doc;
};
const getAllUrl = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_SHORTEN_URL}`);
  console.log(data);
  return data.allUrls;
};
const getUrl = async (shortId) => {
    console.log(    `${import.meta.env.VITE_API_SHORTEN_URL}/${shortId}`,
)
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_SHORTEN_URL}/${shortId}`,
  );
  console.log(data);
  return data;
};
const deleteUrl = async (shortId) => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_SHORTEN_URL}`);
  console.log(data);
  return data;
};

export { createShortUrl, getAllUrl, getUrl, deleteUrl };
