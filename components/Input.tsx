import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export function InputDefault() {
  return <Input type='email' placeholder='Email' />
}

export function InputDisabled() {
  return <Input disabled type='email' placeholder='Email' />
}

export function InputWithLabel() {
  return (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='email'>Email</Label>
      <Input type='email' id='email' placeholder='Email' />
    </div>
  )
}

export function InputWithText() {
  return (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='email-2'>Email</Label>
      <Input type='email' id='email-2' placeholder='Email' />
      <p className='text-sm text-slate-500'>Enter your email address.</p>
    </div>
  )
}

export function InputWithButton() {
  return (
    <div className='flex w-full max-w-sm items-center space-x-2'>
      <Input type='email' placeholder='Email' />
      <Button type='submit'>Subscribe</Button>
    </div>
  )
}
