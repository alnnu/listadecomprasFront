"use client"
import MinhaLista from "@/components/minhaLista/minhaLista"
import { useTab } from "@/context/tabContext"
import { list } from "@/types/listTypes"
import { getActiveList } from "@/utils/axios/requests/ListRequests"
import { useEffect, useState } from "react"

export default function Page() {
  useEffect(() => {
    HandleGetActiveList()
  })
  const [activeList, setActiveList] = useState<list | null>(null)
  const { activeTab } = useTab()

  function HandleGetActiveList() {
    getActiveList()
      .then((res) => {
        if (res.status == 200) {
          setActiveList(res.data)
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
  return (
    <div>
      {activeTab == "minhalista" && <MinhaLista list={activeList} />}
      {activeTab == "todaslistas" && <>xmmxmxmm</>}
    </div>
  )
}
