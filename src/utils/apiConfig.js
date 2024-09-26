// const baseURL = process.env.REACT_APP_API_BASE_URL;
// const baseURL = process.env.REACT_APP_API_BASE_URL || 'https://petportbackend.onrender.com'; 
import { baseURL } from "../config";
console.log('Base URL:', baseURL)

export const API_URLS = {
    signin: `${baseURL}/useranimalinvest/signin`,
    
};   