import axios from 'axios'

const api = axios.create({
  baseURL: 'https://sqlapi-postgres.herokuapp.com',
})

export default api
