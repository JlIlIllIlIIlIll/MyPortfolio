import React from 'react'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Social from './components/home/Social'

const App = () => {
  return (
    <>
      <Nav />
      <main className="main">
        <Home />
      </main>
    </>
  )
}

export default App