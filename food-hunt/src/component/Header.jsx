import React, { useState } from 'react'
import { FaPlay, FaSearch } from "react-icons/fa"
import header from '../assets/banner.png'
const Header = () => {
    const [value, getValue] = useState('')

    const handleFrom = (e) => {
        getValue(e.target.value)
        e.preventDefault();
    }

    console.log(value)
    return (
        <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
            <div className="container mx-auto py-[16vh]">
                <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center">
                    <div className="lg:w-[32rem] w-full flex flex-col space-y-6">
                        <div className="text-4xl md:text-5xl font-bold text-[#2e2e2e] lg:text-6xl">
                            We are <span className="text-[#f54748]">
                                Serious
                            </span> For <span className="text-[#f54748]">Food</span> & <span className="text-[#Fdc55e]">Delivery .</span>
                        </div>
                        <div className="lg:text-xl text-[#191919] md:text-lg text-base">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni doloremque, facilis voluptatum maxime repudiandae quod.
                        </div>

                        <form className="flex rounded-full py-2 px-4 justify-between items-center bg-white shadow-md" onSubmit={handleFrom}>
                            <div className="flex items-center">
                                <FaSearch size={22} className=' cursor-pointer' />
                                <input type="text" placeholder='Search food here ...' className=" text-[#191919] w-full border-none outline-none py-2 px-4" />

                            </div>
                            <button className="h-10 w-10 relative bg-[#fdc55e] rounded-full" type='submit'>
                                <FaSearch size={15} className=' cursor-pointer text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                            </button>
                        </form>
                        
                    </div>
                    <img src={header} className=' h-[28rem] mx-auto justify-end' alt="" />
                </div>

            </div>
        </div>
    )
}

export default Header