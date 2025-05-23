import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ScrollToTopButton from './components/ScrollToTopButton'
import Bookdemo from './pages/Bookdemo'
import Client from './pages/Client'
import Contact from './pages/Contact'
import Gallary from './pages/Gallary'
import Products from './pages/Products'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Testimonials from './pages/Testimonials'

function App() {

  return (
    <div className='w-[100%] h-screen'>
    <Header/>
    <Navbar/>
    <div className='pt-20'>
    <HeroSection/>
    <Gallary/>
    <Products/>
    <Solutions/>
    <Services/>
    <Bookdemo/>
    <Contact/>
    <Client/>
    <Testimonials/>
    <ScrollToTopButton/>
    <Footer/>
    </div>
    
    </div>
  )
}

export default App
