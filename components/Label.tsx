import { Checkbox } from '@/components/ui/checkbox'
import { Label as LabelAlias } from '@/components/ui/label'

export function Label() {
  return (
    <div>
      <div className='flex items-center space-x-2'>
        <Checkbox id='terms' />
        <LabelAlias htmlFor='terms'>Accept terms and conditions</LabelAlias>
      </div>
    </div>
  )
}
