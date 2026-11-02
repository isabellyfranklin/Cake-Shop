import './App.css'
import {Nav} from '././components/Nav/Nav'
import { Hero } from './components/Hero/Hero'
// import TypeOfCakes from './components/TypeOfCakes/TypeOfCakes'
import Cakes from './components/Cakes/Cakes'
import About from './components/About/About'
import Testimonials from './components/Testimonials/Testimonials'


function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      {/* <TypeOfCakes></TypeOfCakes>      */}
      <Cakes/>
      <About/>
      <Testimonials/>
   
    </>
  )
}

export default App 
