import React from 'react'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import About from './components/about/About'

const App = () => {
  return (
    <>
      <Nav />
      <main className="main">
        <Home />
        <About />
      </main>
    </>
  )
}

export default App