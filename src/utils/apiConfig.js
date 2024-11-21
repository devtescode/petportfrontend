
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
    addupaccount: `${baseURL}/useranimalinvest/addupaccount`,
    getaccount: `${baseURL}/useranimalinvest/getaccount`,
    // "https://petportbackend.onrender.com/useranimalinvest/adminlogin"
    adminlogin : `${baseURL}/useranimalinvest/adminlogin`,
    // walletbalance: (email)=> `${baseURL}/api/wallet-balance/${email}`,
    userBalance: (email)=> `${baseURL}/useranimalinvest/userBalance/${email}`,
    fundaccount : `${baseURL}/useranimalinvest/fundaccount`,
    dashboard : `${baseURL}/useranimalinvest/dashboard`,
    profile: `${baseURL}/useranimalinvest/profile`
    // /api/wallet-balance/${email}
};  