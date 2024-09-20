import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="bg-gray-900 text-white px-4 h-16">
            <div className='flex flex-col justify-center items-center gap-2 h-full'>
                <div className='text-sm md:text-base'>Copyright &copy; {currentYear} Get Me A Chai | All rights reserved!</div>
                <div  className='text-xs md:text-sm text-gray-500'>Made by Harsh</div>
            </div>
</footer>

    )
}

export default Footer