import axios from "axios"

const apiURL = process.env.NEXT_PUBLIC_API

const axiosInstance = axios.create({
  baseURL: apiURL,
})

export default axiosInstance
