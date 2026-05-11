"use client"
import MinhaLista from "@/components/minhaLista/minhaLista"
import { useTab } from "@/context/tabContext"
import { list } from "@/types/listTypes"
import {
  getActiveList,
  deactivateList,
} from "@/utils/axios/requests/ListRequests"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

function isFromPreviousDay(dateStr: string): boolean {
  const created = new Date(dateStr)
  const today = new Date()
  return (
    created.getFullYear() !== today.getFullYear() ||
    created.getMonth() !== today.getMonth() ||
    created.getDate() !== today.getDate()
  )
}

export default function Page() {
  const [activeList, setActiveList] = useState<list | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const { activeTab } = useTab()

  useEffect(() => {
    HandleGetActiveList()
    console.log(1)
  }, [])

  const HandleGetActiveList = () => {
    getActiveList()
      .then((res) => {
        if (res.status == 200) {
          setActiveList(res.data)
          if (isFromPreviousDay(res.data.createdAt)) {
            setDialogOpen(true)
          }
        } else if (res.status == 404) {
          setActiveList(null)
        } else {
          console.error(
            "Houve um erro " + res.status + " com log -> " + res.data
          )
          setActiveList(null)
        }
      })
      .catch((e) => {
        console.log(e)
        setActiveList(null)
      })
  }

  const HandleDeactivadeList = (id: number) => {
    deactivateList(id)
      .then((res) => {
        if (res.status == 200) {
          setActiveList(null)
        } else {
          console.error(
            "Houve um erro " + res.status + " com log -> " + res.data
          )
          setActiveList(null)
        }
      })
      .catch((e) => {
        console.log(e)
        setActiveList(null)
      })
  }

  return (
    <div>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Lista do dia anterior</DialogTitle>
            <DialogDescription>
              A lista ativa foi criada em um dia anterior. Deseja continuar com
              ela ou finalizar para criar uma nova?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Continuar com esta lista</Button>
            </DialogClose>
            <Button
              type="submit"
              onClick={() =>
                (activeList && HandleDeactivadeList(activeList.id)) ||
                setDialogOpen(false)
              }
            >
              Finalizar lista
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {activeTab == "minhalista" && (
        <MinhaLista
          list={activeList}
          HandleDeactivadeList={() => HandleDeactivadeList(activeList?.id)}
        />
      )}
      {activeTab == "todaslistas" && <>xmmxmxmm</>}
    </div>
  )
}
