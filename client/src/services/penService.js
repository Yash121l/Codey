import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const getAllPens = async () => {
    const response = await axios.get(`${API_URL}/pens`);
    return response.data;
};

export const savePen = async (pen) => {
    const response = await axios.post(`${API_URL}/pens`, pen);
    return response.data;
};
