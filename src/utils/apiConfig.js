// const baseURL = process.env.REACT_APP_API_BASE_URL;
const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000'; 
console.log('Base URL:', baseURL)
export const API_URLS = {
    signin: `${baseURL}/useranimalinvest/signin`,
    // Add more endpoints here as needed
};