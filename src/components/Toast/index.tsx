import { ToastProvider } from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

import {
  ToastRoot,
  ToastCloseButton,
  ToastTitle,
  ToastDescription,
  ToastViewport
} from './styles'

interface ToastProps {
  title: string
  description: string
  open: boolean
  setOpen: (value: boolean) => void
}

export function Toast({ title, description, open, setOpen }: ToastProps) {
  return (
    <ToastProvider swipeDirection='right'>
      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastCloseButton>
          <X size={11} weight="bold" />
        </ToastCloseButton>

        <ToastTitle>{title}</ToastTitle>

        <ToastDescription>{description}</ToastDescription>
      </ToastRoot>

      <ToastViewport />
    </ToastProvider>
  )
}
