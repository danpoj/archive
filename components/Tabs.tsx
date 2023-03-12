import {
  Tabs as TabsAlias,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

export const Tabs = () => {
  return (
    <TabsAlias defaultValue='account' className='w-[400px]'>
      <TabsList>
        <TabsTrigger value='account'>Account</TabsTrigger>
        <TabsTrigger value='password'>Password</TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <p className='text-sm text-slate-500 dark:text-slate-400'>
          Make changes to your account here. Click save when you&apos;re done.
        </p>
      </TabsContent>
      <TabsContent value='password'>
        <p className='text-sm text-slate-500 dark:text-slate-400'>
          Change your password here. After saving, you&apos;ll be logged out.
        </p>
      </TabsContent>
    </TabsAlias>
  )
}
