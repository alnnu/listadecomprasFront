"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function AddProductButton() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="fixed right-12 bottom-30 size-16 rounded-full border-b-2">
            <Plus className="size-8" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Adicione produto na lista</DialogTitle>
            <DialogDescription>
              Adicione ou crie uma nova lista com os produto selecionados
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
