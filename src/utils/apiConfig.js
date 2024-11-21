
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
    adminlogin : `${baseURL}/useranimalinvest/adminlogin`,
    userBalance: (email)=> `${baseURL}/useranimalinvest/userBalance/${email}`,
    fundaccount : `${baseURL}/useranimalinvest/fundaccount`,
    dashboard : `${baseURL}/useranimalinvest/dashboard`,
    profile: `${baseURL}/useranimalinvest/profile`,
    createplan: `${baseURL}/useranimalinvest/createplan`,
    getplan :(id)=> `${baseURL}/useranimalinvest/getplan/${id}`,
    getHistory: `${baseURL}/useranimalinvest/getHistory`,
    getusernotificationcount: `${baseURL}/useranimalinvest/getusernotificationcount`,
    getusernotification:`${baseURL}/useranimalinvest/getusernotification`,
    getallnotifications: `${baseURL}/useranimalinvest/getallnotifications`,
    fetchUsersNotifications: `${baseURL}/useranimalinvest/fetchUsersNotifications`,
    adnotification: `${baseURL}/useranimalinvest/adnotification`,
    deletenotification: (id)=> `${baseURL}/useranimalinvest/deletenotification/${id}`,
    changepassword: `${baseURL}/useranimalinvest/changepassword`
};  