import axios from 'axios'

const Axios = axios.create({
    baseURL: '',
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
})
Axios.interceptors.request.use(config => { // 请求拦截器配置 // 可不配置
    // do sth
    return config
}, error => {
    console.log(error)
    return Promise.reject(error)
})

Axios.interceptors.response.use(response => { // 响应拦截器配置 // 可不配置
    // do something
    return response
}, error => {
    console.log(error)
    return Promise.reject(error)
})


export default Axios