import React from 'react'

const Body = () => {
    return (
        <figure className='rounded-xl'>
            <img className='w-24 h-24 rounded-full mx-auto' src="../assets/dd.jpg" alt="" width="384" height="400"/>
            <div className='pt-6 text-center space-y-4'>
                <blockquote>
                    <p className='text-lg font-medium'>
                        "I am Devkant Swargiary. I am a Frontend Web Developer &amp; a Open Source Enthusiast.
                        <br></br>
                        When I am not coding I prefer to play guitar and go out on a drive. I like to listen to Bob Dylan &amp; John Mayer"
                    </p>
                </blockquote>
                <figcaption className='font-medium'>
                    <div className='text-sky-500 dark:text-sky-400'>
                        Devkant Swargiary
                    </div>
                </figcaption>
            </div>
        </figure>

    );
}
export default Body;