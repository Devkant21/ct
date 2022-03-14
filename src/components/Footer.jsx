import React from 'react'
import FontAwesomeIcon from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <>
        <footer>
            <div className='bottom'>
            <div className='flex justify-center'>
            <p>
                Connect with me
            </p>
            <div className='row'>
                <div className='col-3 mx-auto'>
                    <a href="#">
                        {/* <i className='fab fa-twitter fontawesome-style'> */}
                        {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
                        {/* </i> */}
                    </a>
                </div>
                <div className='col-3 mx-auto'>
                    <a href="#">
                        {/* <i className='fab fa-github fontawesome-style'> */}
                        {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
                        {/* </i> */}
                    </a>
                </div>
                <div className='col-3 mx-auto'>
                    <a href="#">
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