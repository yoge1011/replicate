import React from 'react'
import './user-tab.styles.scss'
import { NavLink } from 'react-router-dom'

const UserTab = ({ match }) => {
    const url = match.url;
    return (
        <div className='tab-link'>
            <ul className='tab-list'>
                <li>
                    <h4>
                        <NavLink exact activeClassName='is-active' to={`${url}`}>Profile</NavLink>
                    </h4>
                </li>
                <li>
                    <h4>
                        <NavLink activeClassName='is-active' to={`${url}/claps`}>Claps</NavLink>
                    </h4>
                </li>
                <li>
                    <h4>
                        <NavLink activeClassName='is-active' to={`${url}/hightlights`}>Highlights</NavLink>
                    </h4>
                </li>
            </ul>
        </div>
    )
}

export default UserTab;