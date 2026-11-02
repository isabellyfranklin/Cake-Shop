import './App.css'
import {Nav} from '././components/Nav/Nav'
import { Hero } from './components/Hero/Hero'
// import TypeOfCakes from './components/TypeOfCakes/TypeOfCakes'
import Cakes from './components/Cakes/Cakes'
import About from './components/About/About'


function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      {/* <TypeOfCakes></TypeOfCakes>      */}
      <Cakes/>
      <About/>
   
    </>
  )
}

export default App 
