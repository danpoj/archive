'use client'

import { Label } from '@/components/ui/label'
import {
  RadioGroup as RadioGroupAlias,
  RadioGroupItem,
} from '@/components/ui/radio-group'

export function RadioGroup() {
  return (
    <RadioGroupAlias defaultValue='comfortable'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='default' id='r1' />
        <Label htmlFor='r1'>Default</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='comfortable' id='r2' />
        <Label htmlFor='r2'>Comfortable</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='compact' id='r3' />
        <Label htmlFor='r3'>Compact</Label>
      </div>
    </RadioGroupAlias>
  )
}
