import React from 'react'

function Navbar() {
  return (
    <div className=' navbar w-full bg-[#1A1A1A] text-white p-4 flex justify-between items-center rounded-2xl'>
        <div>
            Logo
        </div>
        <div>
            <ul className='flex gap-4 '>
                <li className='bg-[#0F0F0F] px-[20px] py-[16px] rounded-[12px] text-white text-[16px] hover:bg-[#FF6600]'><a  href="">Bosh sahifa</a></li>
                <li  className='bg-[#0F0F0F] px-[20px] py-[16px] rounded-[12px] text-white text-[16px] hover:bg-[#FF6600]'><a href="">Kompaniya haqida</a></li>
                <li  className='bg-[#0F0F0F] px-[20px] py-[16px] rounded-[12px] text-white text-[16px] hover:bg-[#FF6600]'><a href="">Xizmatlar</a></li>
                <li  className='bg-[#0F0F0F] px-[20px] py-[16px] rounded-[12px] text-white text-[16px] hover:bg-[#FF6600]'><a href="">Mijozlar</a></li>
                <li  className='bg-[#0F0F0F] px-[20px] py-[16px] rounded-[12px] text-white text-[16px] hover:bg-[#FF6600]'><a href="">Aloqa</a></li>
            </ul>
        </div>
        </div>


  )
}

export default Navbar