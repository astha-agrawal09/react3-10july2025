
// 1. Import Area

import './App.css'

// import something from somelib/someloc..

import Aside from './components/Aside'
import Footer from './components/Footer'
import Header from './components/Header'
import Section from './components/Section'


// 2. Function Defination
function App() {


  // In React every function/component return HTML Structure i.e jsx.
  return (
    <>
      <Header />
      <main className=' common text-white mb-3 row'>
        <Aside />
        <Section />
      </main>
      <Footer />
    </>
  )
}

// 3. Export Area

export default App;
