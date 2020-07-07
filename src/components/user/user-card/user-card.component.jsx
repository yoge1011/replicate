import React from 'react'
import './user-card.styles.scss'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
    return (
        <div className='user-card'>
            <div className='user-profile-detail'>
                <div className='user-profile'>
                    <div className='usr-name'>
                        <h1>{user.name}</h1>
                    </div>
                    <div className='folw-btn'>
                        <div>
                            <button className='follow'>Follow</button>
                        </div>
                        <div>
                            <button className='bottom-arrow'>
                                <svg width="21" height="21" viewBox="0 0 21 21"><path d="M4 7.33L10.03 14l.5.55.5-.55 5.96-6.6-.98-.9-5.98 6.6h1L4.98 6.45z" fillRule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            
                <div className='about'>
                    <p>{user.profession}</p>
                </div>
                <span className='assd'>
                    <div>Medium member since February 2020 . </div>
                    <div>Editor of <Link to="#">EdgeCoders</Link></div>
                </span>
            </div>
            <div className='user-avatar'>
                <div className='user'></div>
                    <img alt={user.name} className="avatar" src={user.avatar} width="128" height="128"/>
            </div>
        </div>
    )
}

export default UserCard;