import React from 'react'
import { CreateContainer, Header, MainContainer } from './components'
import {Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <div className='w-screen h-auto flex flex-col bg-primary'>
      <Header/>
      <main className="mt-24 p-8 w-full">
        <Routes>
          <Route path='/' element={<MainContainer/>}/>
          <Route path='/createItems' element={<CreateContainer/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App