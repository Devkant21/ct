import React from 'react'
import useDarkMode from '../hooks/useDarkMode';


const Navbar = () => {
    const [colorTheme, setTheme] = useDarkMode();
    return (
        <div className='fixed top-0 bg-blue-50 w-full p-5'>
                <span 
                    onClick={() => setTheme(colorTheme)}
                    className="w-10 h-10 bg-black rounded-full shadow-lg cursor-pointer text-white flex items-center justify-center"
                    >
                    {colorTheme === 'light' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" fill="none" 
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    )}
                </span>
            </div>


        // <div className='px-4 py-4 bg-rose-500 text-white'>
        //     {/* <div>
        //         <a className='px-8 py-4 mx-8 justify-left' href="/">CypherTree</a>
        //     </div>   */}
            
        //     <ul className='px-28 py-4 flex text-right space-x-11 justify-end'>
            
                /* <li className='mx-2 cursor-pointer '>
                    DEV
                </li>
                <li className='mx-2 cursor-pointer'>
                    Blog
                </li>
                <li className='mx-2 cursor-pointer'>
                    Portfolio
                </li> */
        //     </ul>
        // </div>
        
    )
}

export default Navbar;