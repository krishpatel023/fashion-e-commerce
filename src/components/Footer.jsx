import Amazon from '../assets/icons/amazon.svg'
import Facebook from '../assets/icons/facebook.svg'
import Instagram from '../assets/icons/instagram.svg'
import FooterLogo from '../assets/footerLogo.svg'

export default function Footer() {
  return (
    <>
    <div className='w-full bg-[#1E1E1E] min-h-[25rem] flex justify-evenly items-start flex-wrap py-12 gap-16 md:py-10 sm:text-center'>

      <div className='h-full w-[10%] flex flex-col justify-center gap-3 text-white md:w-[12rem] md:h-auto'>
        <h1 className='text-xl font-bold mb-4 uppercase'>Company</h1>
        <span className='font-normal cursor-pointer'>About Us</span>
        <span className='font-normal cursor-pointer'>Our Team</span>
        <span className='font-normal cursor-pointer'>Career</span>
        <span className='font-normal cursor-pointer'>Career</span>
      </div>
      <div className='h-full w-[10%] flex flex-col justify-center gap-3  text-white md:w-[12rem] md:h-auto'>
        <h1 className='text-xl font-semibold mb-4 uppercase'>Shop</h1>
        <span className='font-normal cursor-pointer'>Women</span>
        <span className='font-normal cursor-pointer'>Men</span>
        <span className='font-normal cursor-pointer'>Super Savers</span>
        <span className='font-normal cursor-pointer'>Men Accessories</span>
        <span className='font-normal cursor-pointer'>Women Accessories</span>

      </div>
      <div className='h-full w-[10%] flex flex-col justify-center gap-3  text-white md:w-[12rem] md:h-auto'>
        <h1 className='text-xl font-semibold mb-4 uppercase'>Policies</h1>
        <span className='font-normal cursor-pointer'>Terms & Conditions</span>
        <span className='font-normal cursor-pointer'>Cancellations</span>
        <span className='font-normal cursor-pointer'>FAQ's</span>
        <span className='font-normal cursor-pointer'>Shipping Policy</span>
        <span className='font-normal cursor-pointer'>Privacy Policy</span>

      </div>
      <div className='h-full w-[10%] flex flex-col justify-center gap-3  text-white md:w-[12rem] md:h-auto'>
        <h1 className='text-xl font-semibold mb-4 uppercase'>Contact</h1>
        <span className='font-normal cursor-pointer'>+91 9083628322</span>
        <span className='font-normal cursor-pointer'>lorem92@gmail.com</span>
      </div>
    </div>
    <div className='w-full flex flex-col items-center'>
        <div className='w-[95%] h-[4rem] flex justify-between items-center text-center md:flex-col md:py-4 md:gap-4'>
            <img className="h-10" src={FooterLogo} alt="" />
            <h1>© Copyright 2023. All rights reserved</h1>
            <div className='flex justify-start items-center gap-6'>
              <a href=""><img className='w-6 h-6' src={Instagram} alt="..." /></a>
              <a href=""><img className='w-8 h-8' src={Facebook} alt="..." /></a>
              <a href=""><img className='w-6 h-6' src={Amazon} alt="..." /></a>
            </div>
        </div>
    </div>
    </>
  )
}
