import { product } from "./productTypes"

export type list = {
  id: number
  active: boolean
  products: product[]
  createdAt: string
  updatedAt: string
}

type sort = {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

type pageable = {
  offset: number
  pageNumber: number
  pageSize: number
  paged: boolean
  sort: sort
  unpaged: boolean
}

export type pageOfList = {
  content: list[]
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  pageable: pageable
  size: number
  sort: sort
  totalElements: number
  totalPages: number
}

export type msgReturn = {
  msg: string
}
