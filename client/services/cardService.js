import axios from 'axios';

const API_URL = 'https://metro-card-balance-checker-backend.onrender.com/api/card';

export const getCardBalance = async (cardNumber) => {
  try {
    const response = await axios.get(`${API_URL}/${cardNumber}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Server error');
  }
};
