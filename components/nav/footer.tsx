"use client"
import { useState } from "react"
import { Button } from "../ui/button"
import { DynamicIcon } from "lucide-react/dynamic"

export default function Footer() {
  const buttons: {
    label: string
    name: string
    icon: any
    link: string
  }[] = [
    {
      label: "minhalista",
      name: "Minha Lista",
      icon: "house",
      link: "teste",
    },
    {
      label: "Todaslistas",
      name: "Todas as listas",
      icon: "list-checks",
      link: "teste",
    },
  ]

  const [select, setSelect] = useState("minhalista")

  const handlerClick = (label: string) => {
    setSelect(label)
  }
  return (
    <footer className="fixed bottom-0 z-50 w-full border-t-2 px-[35%] py-3">
      <div className="flex justify-between">
        {buttons.map((iten, id) => (
          <Button
            variant="ghost"
            key={id}
            className="w-fi h-fit"
            onClick={() => handlerClick(iten.label)}
          >
            <div
              className={`flex flex-col items-center justify-center ${select === iten.label ? "text-primary" : ""}`}
            >
              <DynamicIcon
                name={iten.icon}
                style={{ width: "2rem", height: "2rem" }}
              />
              <div className="text-center text-sm">{iten.name}</div>
            </div>
          </Button>
        ))}
      </div>
    </footer>
  )
}
