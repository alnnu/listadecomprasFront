import { list, pageOfList, msgReturn } from "@/types/listTypes"
import axiosInstance from "../axios"

export const createList = async (): Promise<list> => {
  const { data } = await axiosInstance.post<list>("/list/create")
  return data
}

export const getActiveList = async (): Promise<list | null> => {
  const { data } = await axiosInstance.get<list>("/list/active")
  return data
}

export const deactivateList = async (id: number): Promise<msgReturn> => {
  const { data } = await axiosInstance.put<msgReturn>(`/list/${id}/deactivate`)
  return data
}

export const addProductToList = async (ids: number[]): Promise<list> => {
  const { data } = await axiosInstance.put<list>("/list/add/product", { ids })
  return data
}

export const removeProductFromList = async (ids: number[]): Promise<list> => {
  const { data } = await axiosInstance.put<list>("/list/remove/product", {
    ids,
  })
  return data
}

export const getAllLists = async (): Promise<pageOfList> => {
  const { data } = await axiosInstance.get<pageOfList>("/list/all")
  return data
}
