import { list, pageOfList, msgReturn } from "@/types/listTypes"
import axiosInstance from "../axios"

export const createList = () => {
  const data = axiosInstance.post("/list/create")
  return data
}

export const getActiveList = () => {
  return axiosInstance.get("/list/active")
}

export const deactivateList = (id: Number) => {
  return axiosInstance.put(`/list/${id}/deactivate`)
}

export const addProductToList = (ids: Number[]) => {
  return axiosInstance.put("/list/add/product", { ids })
}

export const removeProductFromList = (ids: Number[]) => {
  return axiosInstance.put<list>("/list/remove/product", {
    ids,
  })
}

export const getAllLists = () => {
  return axiosInstance.get("/list/all")
}
