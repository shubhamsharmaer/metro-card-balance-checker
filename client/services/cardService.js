import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
export const getCardBalance = async (cardNumber) => {
  try {
    const response = await axios.get(`${API_URL}/${cardNumber}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Server error');
  }
};
