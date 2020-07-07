import React from 'react'
import './blog.styles.scss'
import { Link } from 'react-router-dom';

const BlogComponent = ({blog:{ id, title, imageUrl, shortDescription, description, username, avatar,useId }, columnGrid}) => {
    var backgroundImg = {
        backgroundImage: 'url(' + imageUrl + ')'
    }
    return (
        <div className={ `blog-item ${columnGrid === 4? 'cus-col-4': (columnGrid === 3 ? 'cus-col-3' : (columnGrid === 3 ? 'cus-col-2' : 'cus-col-1' ) )}` }>
            <div className='blog-image'>
                <Link to={`/blogs/${id}`} className='image' style={backgroundImg} />
            </div>
            <div className='blog-detail'>
                <Link to={`/blogs/${id}`} className='blog-detail'>
                    <h3>{title}</h3>
                </Link>
                <div className='short-description'>
                    {shortDescription}
                </div>
            </div>
            <div className='blog-user-detail'>
                <div className='user-avatar'>
                    <Link to={`/user/${useId}`}>
                        <div className='avatar'>
                            <img src={avatar} class="avatar-image u-size36x36 u-xs-size32x32" alt={`Go to the profile of ${username}`} />
                        </div>
                    </Link>
                </div>
                <div className='created-detail'>
                    <Link to={`/user/${useId}`}>{username}</Link>
                    <div className='created-time'>
                        <time datetime="2019-10-29T04:32:27.000Z">Oct 29, 2019</time>
                        <span className='svgIcon svgIcon--star'>
                            <svg class="svgIcon-use" width="15" height="15"><path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path></svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogComponent;