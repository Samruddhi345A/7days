import React from 'react'
import bk_img1 from '../assets/bk_img1.jpeg'
import prof from '../assets/profile_pic1.jpeg'
function ProfileCard() {
    return (
        <>
            <article className='bg-white shadow-md flex flex-col justify-center items-center rounded-lg w-96 h-auto relative'>
                <img src={bk_img1} className='rounded-t-lg h-50 w-full ' alt="background" />
                <section className='w-40 h-40 rounded-full border-4 overflow-hidden border-white absolute top-30 left-1/2 -translate-x-1/2'>
                    <img src={prof} className=' w-full h-full object-cover' alt="Profile Pic" />
                </section>
                <section className='flex flex-col justify-center text-center items-center p-2 mt-25 '>
                    <div className='font-bold text-xl'>Jane Doe</div>
                    <div className='text-gray-600 pt-2 font-light'>Software Engineer</div>
                    <div className='text-gray-600 font-light text-sm'>San Francisco, CA</div>
                </section>
                <div className='flex p-5 text-justify m-3'>
                    <p>
                        Passionate software engineer with 5 years of experience in developing scalable web applications. Skilled in React, Node.js, and cloud technologies. Enthusiastic about learning new technologies and improving coding skills.
                    </p>
                </div>
                <div className='flex justify-center w-full'>
                    <button className='bg-cyan-500 text-white px-4 py-2 rounded-full mb-5 hover:bg-blue-800 border-0 transition duration-300'>Connect</button>
                </div>
            </article>
        </>Te
    )
}

export default ProfileCard