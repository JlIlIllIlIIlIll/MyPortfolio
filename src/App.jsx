import React from 'react'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'

const App = () => {
  return (
    <>
      <Nav />
      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </>
  )
}

export default App