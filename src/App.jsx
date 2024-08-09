import About from "./Components/About/About"
import Banner from "./Components/Banner/Banner"
import Order from "./Components/Food/Order"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Whyto from "./Components/Whytochoose/Whyto"

function App() {


  return (
    <div className='overflow-x-hidden'>
      <Home/>
      <Banner/>
      <About/>
      <Order/>
      <Whyto/>
      <Footer/>
  </div>
  )
}

export default App
