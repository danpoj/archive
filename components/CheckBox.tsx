'use client'

import { Checkbox as CheckboxContainer } from '@/components/ui/checkbox'

export function Checkbox() {
  return (
    <div className='flex items-center space-x-2'>
      <CheckboxContainer id='terms' />
      <label
        htmlFor='terms'
        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        Accept terms and conditions
      </label>
    </div>
  )
}

export function CheckboxWithText() {
  return (
    <div className='items-top flex space-x-2'>
      <CheckboxContainer id='terms1' />
      <div className='grid gap-1.5 leading-none'>
        <label
          htmlFor='terms1'
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          Accept terms and conditions
        </label>
        <p className='text-sm text-slate-500 dark:text-slate-400'>
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}

export function CheckboxDisabled() {
  return (
    <div className='flex items-center space-x-2'>
      <CheckboxContainer id='terms2' disabled />
      <label
        htmlFor='terms2'
        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        Accept terms and conditions
      </label>
    </div>
  )
}
