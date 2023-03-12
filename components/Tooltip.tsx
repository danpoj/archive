import {
  Tooltip as TooltipAlias,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Tooltip = () => {
  return (
    <TooltipProvider>
      <TooltipAlias>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </TooltipAlias>
    </TooltipProvider>
  )
}

export function Tooltip2() {
  return (
    <TooltipProvider>
      <TooltipAlias>
        <TooltipTrigger asChild>
          <Button variant='outline' className='w-10 rounded-full p-0'>
            <Plus className='h-4 w-4' />
            <span className='sr-only'>Add</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </TooltipAlias>
    </TooltipProvider>
  )
}
