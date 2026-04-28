"use client"

import { useTab } from "@/context/tabContext"

export default function Header() {
  const { activeTab } = useTab()

  return (
    <div className="fixed top-0 z-50 h-24 w-full border-b-2 bg-white px-[35%] py-3">
      <div className="pt-4">
        {activeTab === "minhalista" && (
          <>
            <h1 className="text-2xl font-bold">Minha Lista de Compras</h1>
            <p className="text-sm">Lista de compra ativa</p>
          </>
        )}
        {activeTab === "todaslistas" && (
          <>
            <h1 className="text-2xl font-bold">Minhas Listas</h1>
            <p className="text-sm">Todas Listas de compras</p>
          </>
        )}
      </div>
    </div>
  )
}
