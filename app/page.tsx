import Contents from '@/components/Contents'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className='w-full h-full max-w-7xl mx-auto rounded border dark:border-slate-700 overflow-hidden shadow'>
      <Header />

      <Contents />
    </div>
  )
}
