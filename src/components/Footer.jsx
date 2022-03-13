import React from 'react'

const Footer = () => {
    return (
        <>
        <footer>
            <div className='container'>
            <div className='flex justify-center'>
            <p>
                Connect with me
            </p>
            <div className='row'>
                <div className='col-3 mx-auto'>
                    <a href="">
                        <i className='fab fa-twitter fontawesome-style'>
                        </i>
                    </a>
                </div>
                <div className='col-3 mx-auto'>
                    <a href="">
                        <i className='fab fa-github fontawesome-style'>
                        </i>
                    </a>
                </div>
                <div className='col-3 mx-auto'>
                    <a href="">
                        <i className='fab fa-hashnode fontawesome-style'>
                        </i>
                    </a>
                </div>
            </div>
        </div>
        </div>
        </footer>
        </>
    )
}

export default Footer;