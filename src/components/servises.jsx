import axios from 'axios';

const url = new URL('https://6484ab25ee799e321626e89c.mockapi.io/adverts');

export const fetchCars = async (page) => { 
  const response = await axios.get(`${url}?page=${page}&limit=8`, {
    headers: { 'content-type': 'application/json' },
  });
  return response.data;
};
