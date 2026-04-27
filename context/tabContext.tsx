"use client"

import { Tab } from "@/types/navTypes"
import { createContext, useContext, useState } from "react"

const TabContext = createContext<{
  activeTab: Tab
  setActiveTab: (tab: Tab) => void
}>({ activeTab: "minhalista", setActiveTab: () => {} })

export function TabProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<Tab>("minhalista")
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  )
}

export const useTab = () => useContext(TabContext)
