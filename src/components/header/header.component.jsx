import React from 'react'

import './header.styles.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='nav-header-content'>
            <div className='header'>
                <div className="logo-content">
                    <span className="logo">
                        <svg class="svgIcon-use" width="45" height="45"><path d="M5 40V5h35v35H5zm8.56-12.627c0 .555-.027.687-.318 1.03l-2.457 2.985v.396h6.974v-.396l-2.456-2.985c-.291-.343-.344-.502-.344-1.03V18.42l6.127 13.364h.714l5.256-13.364v10.644c0 .29 0 .342-.185.528l-1.848 1.796v.396h9.19v-.396l-1.822-1.796c-.184-.186-.21-.238-.21-.528V15.937c0-.291.026-.344.21-.528l1.823-1.797v-.396h-6.471l-4.622 11.542-5.203-11.542h-6.79v.396l2.14 2.64c.239.292.291.37.291.768v10.353z"></path></svg>
                    </span>
                </div>
                <div className="right-content">
                    <label>
                        <span>
                            <svg className="svgIcon-use" width="25" height="25"><path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path></svg>
                        </span>
                    </label>
                    <Link to="#">
                        <span>
                            <svg className="svgIcon-use" width="25" height="25"><path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path></svg>
                        </span>
                    </Link>
                        
                    <Link to="#">
                        <span>
                            <svg className="svgIcon-use" width="25" height="25"><path d="M16 6c1.1 0 2 .9 2 2v13.661h-.012a.5.5 0 0 1-.118.285.508.508 0 0 1-.708.03L11.5 17.85l-5.662 4.125a.5.5 0 0 1-.706-.03.478.478 0 0 1-.12-.285H5V8c0-1.1.9-2 2-2h9zM6 8v12.636l5.162-3.667a.49.49 0 0 1 .676 0L17 20.637V8c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1z"></path><path d="M21 5v13.661h-.012a.5.5 0 0 1-.118.285.508.508 0 0 1-.708.03L20 18.858V5c0-.55-.45-1-1-1h-9c-.55 0-1 .45-1 1H8c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2z"></path></svg>
                        </span>
                    </Link>
                </div>
            </div>
            <div className='nav-content'>
                <div className='js-logo'>
                    <Link to='/blogs'>
                        <img alt="EdgeCoders" class="" src="https://miro.medium.com/max/360/1*XFy9Re3P8QU2GEPv5UKCRw.png" width="180" height="36" />
                    </Link>
                </div>
                <div className='link-list'>
                    <ul>
                        <li><span><Link to='/blogs'>EdgeCoders</Link></span></li>
                        <span />
                        <li><span><Link to='/blogs'>jsComplete.com</Link></span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;