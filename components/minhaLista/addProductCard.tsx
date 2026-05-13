import { type product } from "@/types/productTypes"
import { DynamicIcon } from "lucide-react/dynamic"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: product
}

export default function AddProductCard({ product }: ProductCardProps) {
  return (
    <Card
      className={cn(
        "mb-3 flex flex-row items-center gap-4 rounded-xl border px-4 py-3 shadow-none",
        "transition-colors hover:bg-muted/50"
      )}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
        <DynamicIcon
          name={product.icon.toLowerCase() as any}
          className="h-5 w-5"
        />
      </div>

      {/* Conteúdo */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-foreground">
          {product.name}
        </p>
        <p className="truncate text-xs text-muted-foreground">
          {product.description}
        </p>
      </div>
    </Card>
  )
}
