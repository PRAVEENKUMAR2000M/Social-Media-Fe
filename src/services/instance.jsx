import axios from "axios"


const baseURL = 'https://social-media-be-986j.onrender.com/api'

// http://localhost:3001/api

// https://social-media-be-986j.onrender.com/

const authInstance = axios.create({
    baseURL: baseURL,
    // timeout: 5000,
    headers: {
        'contentType': 'application/json'
    }
})

const productedInstance = axios.create({
    baseURL: baseURL,
    // timeout: 5000,
    headers: {
        'contentType': 'application/json'
    }
})

productedInstance.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = 'bearer ' + token
    }
    return config
})


export default {
    authInstance,
    productedInstance
}
