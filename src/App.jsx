import './App.css'
import Carousel from './components/Carousel'
import DiscountAd from './components/DiscountAd'
import Footer from './components/Footer'
import Header from './components/Header'
import Newsletter from './components/Newsletter'
import Products from './components/Products'
import SearchBar from './components/SearchBar'
import ShopCategoryWise from './components/ShopCategoryWise'
function App() {
  return (
    <>
      <Header/>
      <SearchBar/>
      <Carousel/>
      <div className='mt-16 mb-16'></div>
      <Products/>
      <div className='mt-16 mb-16'></div>
      <DiscountAd/>
      <div className='mt-16 mb-16'></div>
      <ShopCategoryWise/>
      <div className='mt-16 mb-16'></div>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
