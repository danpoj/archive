export default function Home() {
  return (
    <div className='h-screen p-4'>
      <div className='h-full max-w-7xl mx-auto rounded border overflow-hidden shadow'>
        <header className='h-10 bg-white border-b'>header</header>
        <main className='h-full pb-10 flex'>
          <div className='bg-slate-200 h-full w-60'>sidebar</div>
          <div className='bg-zinc-200 w-full h-full'>contents</div>
        </main>
      </div>
    </div>
  )
}
