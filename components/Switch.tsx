import { Label } from '@/components/ui/label'
import { Switch as SwitchAlias } from '@/components/ui/switch'

export function Switch() {
  return (
    <div className='flex items-center space-x-2'>
      <SwitchAlias id='airplane-mode' />
      <Label htmlFor='airplane-mode'>Airplane Mode</Label>
    </div>
  )
}
