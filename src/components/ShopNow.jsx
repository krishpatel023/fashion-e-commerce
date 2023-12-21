import Banner1 from '../assets/banner_1.jpg'
import Banner2 from '../assets/banner_2.jpg'
import Banner3 from '../assets/banner_3.jpg'

export default function ShopNow() {
  return (
    <>
      <Layout 
        Text="Latest Women's Collection"
        Image={Banner2}
        Orientation= {false}
      />
      <Layout 
        Text="Latest Men's Collection"
        Image={Banner1}
        Orientation= {true}
      />
      <Layout 
        Text="Shop Now, Slay Later"
        Image={Banner3}
        Orientation= {false}
      />
    </>
  )
}


const Layout = ({Text, Image, Orientation}) => {
    function SetOrientation(){
        if(Orientation === false){
            return 'justify-start sm:justify-center'
        }
        if(Orientation === true){
            return 'justify-end sm:justify-center'
        }
    }

    function SetImageOrientation(){
        if(Orientation === false){
            return ''
        }
        if(Orientation === true){
            return '-scale-x-[1]'
        }
    }

    return (
        <div className={`w-full h-[100vh] relative flex ${SetOrientation()} overflow-hidden
          md:h-[80vh] 
        `}>
            <div className='w-full h-full absolute top-0 left-0'>
                <img src={Image} className={`w-full h-full object-cover ${SetImageOrientation()}`} alt="" />
            </div>
            <div className='w-1/2 h-full flex flex-col justify-center items-center text-center z-10 gap-10 p-16 sm:p-2'>
                <h1 className="font-normal text-7xl capitalize font-[Times-new-roman] text-white
                  md:text-5xl
                ">{Text}</h1>
                <button className="border-2 border-white text-white w-48 h-16 text-2xl md:w-36 md:h-12 md:text-lg sm:w-28 sm:h-8 sm:text-base">Shop Now</button>
            </div>
        </div>
    )
}