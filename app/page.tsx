import { icons } from '@/components/Icons'

export default function LandingPage() {
  return (
    <div className='grid mt-16'>
      <h1 className='text-responsive-sm text-slate-700 dark:text-slate-200 leading-5 font-black tracking-tighter'>
        @danpoj/
      </h1>
      <h2 className='bg-landing bg-clip-text text-transparent text-responsive-lg font-black tracking-tighter'>
        Archive
      </h2>

      <div className='border h-screen rounded bg-gradient-to-r from-purple-400 to-cyan-400'></div>
    </div>
  )
}
