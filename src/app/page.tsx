import Link from 'next/link'
import React from 'react'

export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-slate-950 text-white'>
      <h1>HomePage</h1>
      <p>
        Welcome to the home page
      </p>
      <button>
        Click me
      </button>
      <Link href="/about">About</Link>
    </div>
    
  )
}
