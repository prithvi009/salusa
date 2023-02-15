import React from 'react'

const About = () => {
  return (
    <div className='w-full text-primary-200'>

        <div className=' mx-auto items-center w-5/6'>

            <div className='flex justify-center'>
                
                <h1 className='text-[80px] font-extrabold '>Connecting you to better Health</h1>   
            </div>


        <div className='py-20 grid grid-cols-2  items-center justify-center'>
            <div className="">
                <h2 className='text-[30px] font-semibold'>Where Technology meets wellness</h2>
            </div>
            <div>
                <p className=' text-gray-700 tracking-[1px]'>MediLodge is a comprehensive health management platform that combines technology and wellness to provide users with a seamless healthcare experience. With a user-friendly interface, MediLodge allows users to store and manage their medical records, prescriptions, lab reports, and other health-related information. </p>
            </div>
        </div>

        <div>
            <div>
                <h1 className=' text-[80px] font-extrabold py-10'>Culture At MEDILODGE</h1> 
            </div>
            <div className='py-5'>
                <h2 className='text-[25px] font-semibold'>Mission</h2>
                <p className=' text-gray-700 tracking-[1px]'>MediLodge is a comprehensive health management platform that combines technology  </p>
            </div>
            <div className='py-5'>
                <h2 className='text-[25px] font-semibold'>Vision</h2>
                <p className=' text-gray-700 tracking-[1px]'>MediLodge is a comprehensive health management platform that combines technology  </p>
            </div>
            <div className='py-5'>
                <h2 className='text-[25px] font-semibold'>Key Beliefs</h2>
                <p className=' text-gray-700 tracking-[1px]'>MediLodge is a comprehensive health management platform that combines technology  </p>
            </div>
            <div>
                <h2 className='text-[25px] font-semibold'>Values</h2>
                <p className=' text-gray-700 tracking-[1px]'>MediLodge is a comprehensive health management platform that combines technology  </p>
            </div>

        </div>
        </div>
    </div>
  )
}

export default About