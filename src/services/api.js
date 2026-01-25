import axios from 'axios'

const apiCodeBurguer = axios.create({
    baseURL:'http://localhost:3006'
})

export default apiCodeBurguer