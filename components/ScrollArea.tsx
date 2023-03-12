import { ScrollArea as ScrollAreaAlias } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Fragment } from 'react'

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

export function ScrollArea2() {
  return (
    <ScrollAreaAlias className='h-[200px] w-[350px] rounded-md border p-4'>
      Jokester began sneaking into the castle in the middle of the night and
      leaving jokes all over the place: under the king&apos;s pillow, in his
      soup, even in the royal toilet. The king was furious, but he couldn&apos;t
      seem to stop Jokester. And then, one day, the people of the kingdom
      discovered that the jokes left by Jokester were so funny that they
      couldn&apos;t help but laugh. And once they started laughing, they
      couldn&apos;t stop.
    </ScrollAreaAlias>
  )
}
