import React from 'react'


const Navbar = () => {
    return (
        <div className='px-4 py-4 bg-rose-500 text-white'>
            <div>
                <a className='px-8 py-4 mx-8 justify-left' href="/">CypherTree</a>
            </div>  
            <ul className='px-28 py-4 flex text-right space-x-11 justify-end'>
                <li className='mx-2 cursor-pointer '>
                    DEV
                    
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