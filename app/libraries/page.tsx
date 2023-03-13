import { FC } from 'react'
import { libraries } from '@/datas/libraries'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { AspectRatio } from '@/components/ui/aspect-ratio'

interface pageProps {}

const LibrariesHome: FC<pageProps> = ({}) => {
  return (
    <div className='flex flex-col gap-20'>
      <div>
        <div className='space-y-1'>
          <h4 className='text-2xl font-medium leading-none'>Design system</h4>
          <p className='text-sm text-slate-500 dark:text-slate-400'>
            An open-source UI component libraries.
          </p>
        </div>
        <Separator className='my-4' />
        <div className='flex gap-4 overflow-x-scroll whitespace-nowrap pb-6'>
          {libraries.map((library) => (
            <div key={library.title}>
              <div className='w-[120px]'>
                <AspectRatio ratio={1 / 1}>
                  <Image
                    src={library.image}
                    alt={library.title}
                    fill
                    className='rounded-md object-cover'
                  />
                </AspectRatio>
              </div>
              <span className='text-xs text-slate-500'>@{library.author}</span>
              <h3 className='font-medium text-slate-900 leading-none'>
                {library.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className='space-y-1'>
          <h4 className='text-2xl font-medium leading-none'>Design system</h4>
          <p className='text-sm text-slate-500 dark:text-slate-400'>
            An open-source UI component libraries.
          </p>
        </div>
        <Separator className='my-4' />
        <div className='flex gap-4 overflow-x-scroll whitespace-nowrap pb-6'>
          {libraries.map((library) => (
            <div key={library.title}>
              <div className='w-[120px]'>
                <AspectRatio ratio={1 / 1}>
                  <Image
                    src={library.image}
                    alt={library.title}
                    fill
                    className='rounded-md object-cover'
                  />
                </AspectRatio>
              </div>
              <span className='text-xs text-slate-500'>@{library.author}</span>
              <h3 className='font-medium text-slate-900 leading-none'>
                {library.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className='space-y-1'>
          <h4 className='text-2xl font-medium leading-none'>Design system</h4>
          <p className='text-sm text-slate-500 dark:text-slate-400'>
            An open-source UI component libraries.
          </p>
        </div>
        <Separator className='my-4' />
        <div className='flex gap-4 overflow-x-scroll whitespace-nowrap pb-6'>
          {libraries.map((library) => (
            <div key={library.title}>
              <div className='w-[120px]'>
                <AspectRatio ratio={1 / 1}>
                  <Image
                    src={library.image}
                    alt={library.title}
                    fill
                    className='rounded-md object-cover'
                  />
                </AspectRatio>
              </div>
              <span className='text-xs text-slate-500'>@{library.author}</span>
              <h3 className='font-medium text-slate-900 leading-none'>
                {library.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LibrariesHome
