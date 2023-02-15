import React from 'react'
import doctor from "../../../assets/doctor.png"


const Home = () => {
  return (
    
    <section className='gap-16 py-20 md:h-full md:pb-0 '>
        <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
          
          <div className='w-full mx-auto flex space-x-6 justify-between items-center'>
            {/* //Left_part */}
            <div className='w-[550px] max space-y-6'> 
              <h2 className='text-[50px] font-bold leading-1 text-[#37BCF8]'>A Hertitage In Care A Repitation In Excellance</h2>
              <p className='text-[20px] font-medium text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, deleniti laboriosam. Corrupti nemo est repudiandae aut, debitis tenetur officiis commodi cupiditate soluta deleniti dolorem ex.</p>
              <p className='text-[16px] font-light text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, soluta.</p>
            </div>
            {/* Right_part
            */}
            <div>
            <img src={doctor} alt="LOGO_IMAGE" className='' />
            </div>
          </div>
        </div>
    </section>

  )
}

export default Home