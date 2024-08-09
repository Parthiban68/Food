import About from "./Components/About/About"
import Banner from "./Components/Banner/Banner"
import Order from "./Components/Food/Order"
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
  </div>
  )
}

export default App
