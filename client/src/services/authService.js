import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const signIn = async (credentials) => {
    const response = await axios.post(`${API_URL}/auth/signin`, credentials);
    return response.data;
};
