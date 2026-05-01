import axios from "axios"

const apiURL = process.env.API

console.log(apiURL)

const axiosInstance = axios.create({
  baseURL: apiURL,
})

export default axiosInstance

