import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/card';

export const getCardBalance = async (cardNumber) => {
  try {
    const response = await axios.get(`${API_URL}/${cardNumber}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Server error');
  }
};
