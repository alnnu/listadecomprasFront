import axiosInstance from "../axios"

export const getAllProduct = () => {
  const all = axiosInstance.get("/product/all")

  return all
}
