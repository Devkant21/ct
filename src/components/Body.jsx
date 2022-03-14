import React from 'react'

const DEV = () => {
    return (
        <div className='bg-fuchsia-100'>
            <div className='text-center font-medium text-slate-900 dark:text-slate-800'>
                Devkant Swargiary
            </div>
            <div class="text-center text-slate-700 dark:text-slate-500">
                Frontend Web Developer
            </div>
        <figure className='rounded-xl mt-8'>
            <img className='w-24 h-24 rounded-full mx-6' src="./assets/dd.jpg" alt="" width="400" height="400"/>
               
                <blockquote>
                    <p className='text-lg font-medium'>
                        "I am Devkant Swargiary. I am a Frontend Web Developer &amp; a Open Source Enthusiast.
                        <br></br>
                        When I am not coding I prefer to play guitar and go out on a drive. I like to listen to Bob Dylan &amp; John Mayer"
                    </p>
                </blockquote>
            
        </figure>
        </div>

    );
}
export default DEV;