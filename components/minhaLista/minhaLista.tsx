"use client"
import { useState } from "react"
import { list } from "@/types/listTypes"
import ProductCard from "./productCard"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import AddProductButton from "./addProductButon"

export default function MinhaLista({
  list,
  HandleDeactivadeList,
}: {
  list: list | null
  HandleDeactivadeList: any
}) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const createdAt = list
    ? new Date(list.createdAt).toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
      })
    : null

  return (
    <div>
      <AddProductButton />
      {list && (
        <div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>Finalizar lista</DialogTitle>
                <DialogDescription>
                  Deseja finalizar esta lista de compra?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Continuar com a lista</Button>
                </DialogClose>
                <Button
                  type="submit"
                  onClick={() =>
                    HandleDeactivadeList(list.id) || setDialogOpen(false)
                  }
                >
                  Finalizar lista
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          {list.products.length > 0 && (
            <>
              <h2 className="mb-2 pt-5 text-lg font-semibold text-foreground">
                A Comprar
              </h2>
              {list.products.map((product, id) => (
                <ProductCard product={product} finished={false} key={id} />
              ))}
              <Button
                variant="destructive"
                className="mb-3 w-full rounded-xl px-4 py-8 transition-colors hover:bg-muted/50"
                onClick={() => setDialogOpen(true)}
              >
                Finalizar Lista
              </Button>
            </>
          )}
          {list.products.length <= 0 && (
            <>
              <h2 className="mb-2 pt-5 text-lg font-semibold text-foreground">
                Lista criada em {createdAt} ainda sem produtos
              </h2>
            </>
          )}
        </div>
      )}
      {!list && (
        <div className="flex h-[60vh] flex-col items-center justify-center gap-2">
          <h2 className="text-2xl font-bold text-foreground">
            Sem lista ativa
          </h2>
          <p className="text-sm text-muted-foreground">
            Por favor, crie uma nova lista para começar
          </p>
        </div>
      )}
    </div>
  )
}
