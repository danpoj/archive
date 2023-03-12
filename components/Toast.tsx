'use client'

import { useToast } from '@/hooks/use-toast'

import { Button } from '@/components/ui/button'
import { ToastAction } from '@/components/ui/toast'

export function ToastSimple() {
  const { toast } = useToast()

  return (
    <Button
      variant='outline'
      onClick={() => {
        toast({
          description: 'Your message has been sent.',
        })
      }}
    >
      Show Toast
    </Button>
  )
}

export function ToastWithTitle() {
  const { toast } = useToast()

  return (
    <Button
      variant='outline'
      onClick={() => {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
        })
      }}
    >
      Show Toast
    </Button>
  )
}

export function ToastWithAction() {
  const { toast } = useToast()

  return (
    <Button
      variant='outline'
      onClick={() => {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          action: <ToastAction altText='Try again'>Try again</ToastAction>,
        })
      }}
    >
      Show Toast
    </Button>
  )
}

export function ToastDestructive() {
  const { toast } = useToast()

  return (
    <Button
      variant='outline'
      onClick={() => {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          action: <ToastAction altText='Try again'>Try again</ToastAction>,
        })
      }}
    >
      Show Toast
    </Button>
  )
}
