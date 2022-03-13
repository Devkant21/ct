import React from 'react'

const Navbar = () => {
    return (
        <div className='px-4 py-4 bg-slate-600 text-right text-white'>
            <ul className='px-28 py-4 flex space-x-11 justify-end'>
                <li className='mx-2 cursor-pointer '>
                    Home
                </li>
                <li className='mx-2 cursor-pointer'>
                    Blog
                </li>
                <li className='mx-2 cursor-pointer'>
                    Portfolio
                </li>
            </ul>
        </div>
    );
}

export default Navbar;