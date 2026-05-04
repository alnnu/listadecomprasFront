import { list } from "@/types/listTypes"
import ProductCard from "./productCard"

export default function MinhaLista({ list }: { list: list | null }) {
  const createdAt = list
    ? new Date(list.createdAt).toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
      })
    : null

  return (
    <div>
      {list && (
        <div>
          {list.products.length > 0 && (
            <>
              <h2 className="mb-2 pt-5 text-lg font-semibold text-foreground">
                A Comprar
              </h2>
              {list.products.map((product, id) => (
                <ProductCard product={product} finished={false} key={id} />
              ))}
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
