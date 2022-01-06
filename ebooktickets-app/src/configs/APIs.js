import axios from 'axios';


export let endpoints = {
    "users": "/users/",
    "oauth2-info": "/oauth2-info/",
    "login": "/o/token/",
    "current-user": "/users/current-user/",
    "register": "/users/",
    
    "product":"/product/",
    "buseslines":"/buseslines/",
    "busarrangements":"/busarrangements/",
    // 'staff': '/user/staff',
    // 'current-staff': '/staff/current-staff/',
    "detail-bus": (id) => `/busarrangements/${id}/`,
    "tickets-details": `/cmt_busarrangements/`,
    "ticket":"/ticket/",
    "ticket": (ticketId) => `/ticket/${ticketId}/`
    
}


export default axios.create({
    baseURL: 'http://127.0.0.1:8000/',
})