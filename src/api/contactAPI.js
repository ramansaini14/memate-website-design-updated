import axios from "axios";

const api = axios.create({
  baseURL:"https://admin.memate.com.au/api",
  headers:{
    'X-Api-Key': "3fa85f64d51b6c8e74313f7c69aef82d",
    'Content-Type': 'application/json'
  }
});

export const RequestCallBackAPI = async (formData) => {
  try {
    const response = await api.post("/request-callback", JSON.stringify(formData));
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error; 
  }
};

export const emailNowAPI = async (formData) => {
  try {
    const response = await api.post("/email-now", JSON.stringify(formData));
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error; 
  }
};

export const SubscribeEmail = async (formData) => {
  try {
    const response = await api.post("/subscribe-email", JSON.stringify(formData));
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error; 
  }
};



