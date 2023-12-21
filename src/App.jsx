import './App.css'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
// import Header from './components/Header'
import ShopCategoryWise from './components/ShopCategoryWise'
import ShopNow from './components/ShopNow'
function App() {
  return (
    <>
      {/* <Header/> */}
      <Carousel/>
      <ShopCategoryWise/>
      <ShopNow/>
      <Footer/>
    </>
  )
}

export default App
