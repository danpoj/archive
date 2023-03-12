import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from './ui/button'

export function TextareaDefault() {
  return <Textarea placeholder='Type your message here.' />
}

export function TextareaDisabled() {
  return <Textarea placeholder='Type your message here.' disabled />
}

export function TextareaWithLabel() {
  return (
    <div className='grid w-full gap-1.5'>
      <Label htmlFor='message'>Your message</Label>
      <Textarea placeholder='Type your message here.' id='message' />
    </div>
  )
}

export function TextareaWithText() {
  return (
    <div className='grid w-full gap-1.5'>
      <Label htmlFor='message-2'>Your Message</Label>
      <Textarea placeholder='Type your message here.' id='message-2' />
      <p className='text-sm text-slate-500'>
        Your message will be copied to the support team.
      </p>
    </div>
  )
}

export function TextareaWithButton() {
  return (
    <div className='grid w-full gap-2'>
      <Textarea placeholder='Type your message here.' />
      <Button>Send message</Button>
    </div>
  )
}
