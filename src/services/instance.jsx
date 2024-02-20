import axios from "axios"
const isDeplayed = true

const baseURL = isDeplayed ? 'http://localhost:3001/api' : 'https://socialmedia1-xs6e.onrender.com/'

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
