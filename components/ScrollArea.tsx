import { ScrollArea as ScrollAreaAlias } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import React, { Fragment } from 'react'

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function ScrollArea() {
  return (
    <ScrollAreaAlias className='h-72 w-48 rounded-md border border-slate-100 dark:border-slate-700'>
      <div className='p-4'>
        <h4 className='mb-4 text-sm font-medium leading-none'>Tags</h4>
        {tags.map((tag) => (
          <Fragment key={tag}>
            <div className='text-sm'>{tag}</div>
            <Separator className='my-2' />
          </Fragment>
        ))}
      </div>
    </ScrollAreaAlias>
  )
}

export function ScrollArea2({ children }: { children: React.ReactNode }) {
  return <ScrollAreaAlias className='h-full'>{children}</ScrollAreaAlias>
}
