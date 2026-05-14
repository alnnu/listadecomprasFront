import { type product } from "@/types/productTypes"
import { DynamicIcon } from "lucide-react/dynamic"
import { Button } from "../ui/button"

interface ProductCardProps {
  product: product
  selected: boolean
  handleClick: (productId: number) => void
}

export default function AddProductCard({
  product,
  selected,
  handleClick,
}: ProductCardProps) {
  return (
    <Button
      onClick={() => handleClick(product.id)}
      variant="outline"
      className={`mb-3 flex h-fit w-full justify-start gap-4 rounded-xl bg-white px-4 py-3 shadow-none transition-colors hover:bg-muted/50 ${selected ? "border-primary bg-primary/25" : ""}`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${selected ? "bg-primary" : "bg-black/10"}`}
      >
        <DynamicIcon
          name={product.icon.toLowerCase() as any}
          className={`h-5 w-5 ${selected ? "text-white" : ""}`}
        />
      </div>

      {/* Conteúdo */}
      <div className="min-w-0 flex-col text-start">
        <p className="text-sm font-semibold text-foreground">{product.name}</p>
        <p className="truncate text-xs text-muted-foreground">
          {product.description}
        </p>
      </div>
    </Button>
  )
}
