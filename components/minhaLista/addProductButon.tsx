"use client"

import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { Plus, Search } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { product } from "@/types/productTypes"
import { getAllProduct } from "@/utils/axios/requests/ProductRequest"
import AddProductCard from "./addProductCard"

export default function AddProductButton() {
  const [products, setProducts] = useState<product[]>()
  const [search, setSearch] = useState("")

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    getAllProduct()
      .then((res) => {
        if (res.status == 200) {
          setProducts(res.data)
        } else {
          console.error(
            "Houve um erro " + res.status + " com log -> " + res.data
          )
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="fixed right-12 bottom-30 size-16 rounded-full border-b-2">
            <Plus className="size-8" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Adicione produto na lista</DialogTitle>
            <DialogDescription>
              Adicione ou crie uma nova lista com os produto selecionados
            </DialogDescription>
          </DialogHeader>
          <div className="relative">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="pl-9"
              placeholder="Buscar por produtos"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
            {products?.map((product, id) => (
              <div key={id}>
                {product.name
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase()) ? (
                  <AddProductCard product={product} />
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">fechar</Button>
            </DialogClose>

            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
