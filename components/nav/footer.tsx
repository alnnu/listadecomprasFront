"use client"
import { useTab } from "@/context/tabContext"
import { Button } from "../ui/button"
import { DynamicIcon } from "lucide-react/dynamic"
import { Tab, TabButtons } from "@/types/navTypes"

export default function Footer() {
  const buttons: TabButtons = [
    {
      label: "minhalista",
      name: "Minha Lista",
      icon: "house",
      link: "teste",
    },
    {
      label: "todaslistas",
      name: "Todas as listas",
      icon: "list-checks",
      link: "teste",
    },
  ]

  const { activeTab, setActiveTab } = useTab()

  const handlerClick = (label: Tab) => {
    setActiveTab(label)
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
              className={`flex flex-col items-center justify-center ${activeTab === iten.label ? "text-primary" : ""}`}
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
