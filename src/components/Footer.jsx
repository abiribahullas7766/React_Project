import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className="lg:px-24 px-4 text-white">
        {/* footer */}
        <div className='flex flex-col md:flex-row flex-wrap justify-between items-start gap-12'>
            {/* logo text */}
            <div className='space-y-4 lg:w-1/3'>
            <a href='/' className='text-white text-5xl font-bold'><span className='text-orange'>Ni</span>tex</a>
            <p className='text-gray-200'>Welcome to Netix .</p>
            {/* social icons */}
            <div className='flex gap-5 text-white'>
                <a href='/' className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110
                transition-all duration-300'><FaLinkedin className='w-5 h-5'/></a>
                <a href='/' className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110
                transition-all duration-300'><FaInstagram className='w-5 h-5'/></a>
                <a href='/' className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110
                transition-all duration-300'><FaFacebook className='w-5 h-5'/></a>
                <a href='/' className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110
                transition-all duration-300'><FaGithub className='w-5 h-5'/></a>

            </div>

            </div>

            {/* services */}
            <div className='space-y-4'>
                <h3 className='text-2xl font-semibold'>Services</h3>
                <div className='space-y-3 text-gray-300'>
                    <a href='/' className='block'>UI/UX</a>
                    <a href='/' className='block'>Digital Marketing</a>
                    <a href='/' className='block'>WP Development</a>
                    <a href='/' className='block'>Graphics Design</a>
                </div>
            </div>


            {/* contact */}
            <div className='space-y-4'>
                <h3 className='text-xl font-semibold'>Contact us</h3>
                <div className='space-y-3 text-gray-300'>
                    <p>+8801905324955</p>
                    <p>ullash767781@gmail.com</p>
                    <p>Word No 4, <br/> Nurpur Pabna Sadar, Pabna</p>
                </div>
            </div>

            {/* subscribe */}
            <div className='space-y-4 lg:w-96'>
                 <h3 className='text-xl font-semibold'>Subscribe</h3>
                 <div  className='space-y-3 text-gray-300'>
                    <div className='relative w-full'>
                        <input type='email' placeholder='example@gmail.com' className='newsletter_input'/>
                        <button className='newsletter_btn'>
                            <span>Send</span>
                        </button>
                        <p>Need Any Solution send mail here</p>


                    </div>


                 </div>

            </div>


        </div>

        <div className='h-12'></div>
        <hr className='border-gray-300'/>
        <div className='h-8'></div>

        {/* copyright text */}
        <div className='flex flex-col sm:flex-row justify-between pb-7'>
            <p>Copyright @ 2023 Md Abiribah Ullas</p>
            <>Terms of Use | Privacy Policy</>
        </div>



    </div>
  );
};

export default Footer