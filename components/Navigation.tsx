'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Dog, Github, Instagram, Mail } from 'lucide-react'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Articles',
    href: '/',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Libraries',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Links',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
]

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-2 p-4 w-[300px]'>
              <li className='row-span-3'>
                <NavigationMenuLink asChild>
                  <a
                    className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-rose-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md'
                    href='https://github.com/danpoj/archive'
                  >
                    <Dog className='h-6 w-6 text-white' />
                    <div className='mt-4 mb-2 text-lg font-medium text-white'>
                      @danpoj/Archive
                    </div>
                    <p className='text-sm leading-tight text-white/90'>
                      좋은 글, 유용한 라이브러리, 기타 링크가 있는 아카이브
                      입니다.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href='https://github.com/danpoj/archive'
                className='p-2'
              >
                <Mail size={17} />
                <span className=''>jws970306@khu.ac.kr</span>
              </ListItem>

              <div className='flex gap-2'>
                <ListItem
                  href='https://github.com/danpoj/archive'
                  className='p-2 w-full'
                >
                  <Github size={17} />
                  <span className=''>Github</span>
                </ListItem>
                <ListItem
                  href='https://github.com/danpoj/archive'
                  className='p-2'
                >
                  <Instagram size={17} color='fuchsia' />
                  <span className=''>Instagram</span>
                </ListItem>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sections</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[300px] gap-3 p-4 '>
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400 flex items-center gap-1'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
