import React from 'react'
import { Header } from './components'

const App = () => {
  return (
    <div className='w-screen h-auto flex flex-col bg-primary'>
      <Header/>
      <main className="mt-24 "></main>
    </div>
  )
}

export default App