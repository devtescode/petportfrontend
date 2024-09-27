// const baseURL = process.env.REACT_APP_API_BASE_URL;
// const baseURL = process.env.REACT_APP_API_BASE_URL || 'https://petportbackend.onrender.com'; 
import { baseURL } from "../config";
console.log('Base URL:', baseURL)

export const API_URLS = {
    signin: `${baseURL}/useranimalinvest/signin`,
    signup: `${baseURL}/useranimalinvest/signup`,
    dashboard: `${baseURL}/useranimalinvest/dashboard`,
    getallinvest: `${baseURL}/useranimalinvest/getallinvest`,
    planinvestnow: `${baseURL}/useranimalinvest/planinvestnow`,
    getuserplans: `${baseURL}/useranimalinvest/getuserplans`,
    getcomments: (planId) => `${baseURL}/useranimalinvest/getcomments/${planId}`,
    likeplan: `${baseURL}/useranimalinvest/likeplan`,
    addcomment: `${baseURL}/useranimalinvest/addcomment`,
    addupaccount: `${baseURL}/useranimalinvest/addupaccount`
};  