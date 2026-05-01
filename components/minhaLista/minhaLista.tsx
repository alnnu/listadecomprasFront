import { list } from "@/types/listTypes"
import { log } from "node:console"
import ProductCard from "./productCard"

export default function MinhaLista({ list }: { list: list | null }) {
  return (
    <div>
      {list && (
        <div>
          <h2 className="mb-2 pt-5">A Comprar</h2>
          {list.products.map((product, id) => (
            <ProductCard product={product} finished={false} key={id} />
          ))}
        </div>
      )}
    </div>
  )
}
