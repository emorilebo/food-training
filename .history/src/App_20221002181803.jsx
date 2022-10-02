import React from 'react'
import { Header } from './components'
import {} from "react-router-dom"

const App = () => {
  return (
    <div className='w-screen h-auto flex flex-col bg-primary'>
      <Header/>
      <main className="mt-24 p-8 w-full">
        <Routes>

        </Routes>
      </main>
    </div>
  )
}

export default App