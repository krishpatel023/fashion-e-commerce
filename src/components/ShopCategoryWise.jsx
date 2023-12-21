import Image1 from '../assets/displayImg_1.jpg'
import Image2 from '../assets/displayImg_2.jpg'
import Image3 from '../assets/displayImg_3.jpg'
import Image4 from '../assets/displayImg_4.jpg'
import Image5 from '../assets/displayImg_5.jpg'
import Image6 from '../assets/displayImg_6.jpg'
import Image7 from '../assets/displayImg_7.jpg'

export const Categories = [
    {
        id : 1,
        name : "Men's Shirts",
        img : Image1,
    },
    {
        id : 2,
        name : "Women's Kurtis",
        img : Image4,
    },
    {
        id : 3,
        name : "Women's Dress",
        img : Image5,
    },
]

export default function ShopCategoryWise() {
  return (
      <div className="h-[70vh] w-full flex justify-center sm:flex-col sm:h-auto">
        {
          Categories.map((product)=>
          <Layout
            Text={product.name}
            Image={product.img}
            key={product.id}
          />
          )
        }
      </div>
  )
}


const Layout = ({Text, Image}) => {
  return (
      <div className={`w-[33.33%] h-full relative flex flex-col justify-end
      sm:w-full sm:h-[70vh]
      `}>
          <div className='w-full h-full absolute top-0 left-0 overflow-hidden'>
              <img src={Image} className='object-cover w-full h-full' alt="" />
          </div>
          <div className='h-[60%] w-full flex flex-col justify-center items-center text-center z-10 gap-10 p-16'>
              <h1 className="font-normal text-5xl capitalize font-[Times-new-roman] text-white">{Text}</h1>
              <button className="border-2 border-white text-white w-48 h-16 text-2xl md:w-36 md:h-12 md:text-lg sm:w-28 sm:h-8 sm:text-base">Shop Now</button>
          </div>
      </div>
  )
}
  