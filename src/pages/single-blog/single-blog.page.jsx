import React from 'react'
import './single-blog.styles.scss'
import { blogsData } from '../../data/blog.data'
import { Link } from 'react-router-dom';
import LangTooltip from '../../components/lang-tooltip/lang-tooltip.component';
import BlogDescription from '../../components/single-blog/blog-description/blog-description.component';
import BlogHeader from '../../components/single-blog/blog-header/blog-header.component';

const SingleBlog = ( {match} ) => {
    const blog = blogsData.filter(blog => blog.id == match.params.id)[0];
    const {id, title, shortDescription, imageUrl, description, language, createdAt, srcSet, username, avatar, useId } = blog;
    return (
        <div className='single-blog-page'>

            <BlogHeader title={title} shortDescription={shortDescription} username={username} avatar={avatar} useId={useId} />
        
            <div className='hd-img blog-img'>
                <div className='bg-img' style={{textAlign: 'center'}}>
                    {
                        srcSet ? <img class="qd uy s t u hw ai ig" width="1050" height="600" srcSet={srcSet} sizes="1000px" role="presentation" src={imageUrl} /> : <img class="qd uy s t u hw ai ig" sizes="1000px" role="presentation" src={imageUrl} />
                    }
                    
                </div>
            </div>

            <BlogDescription description={description} />

            <div className='blog-completion'>
                <div className='jslogo-completion'>
                    <Link to='/blogs'>
                        <img class="qd uy s t u hw ai ig" width="600" height="120" srcSet="https://miro.medium.com/max/552/1*XFy9Re3P8QU2GEPv5UKCRw.png 276w, https://miro.medium.com/max/1104/1*XFy9Re3P8QU2GEPv5UKCRw.png 552w, https://miro.medium.com/max/1200/1*XFy9Re3P8QU2GEPv5UKCRw.png 600w" sizes="600px" role="presentation" src="https://miro.medium.com/max/600/1*XFy9Re3P8QU2GEPv5UKCRw.png"/>
                    </Link>
                    <div style={{marginTop:'10px',fontSize:'16px',textAlign: 'center'}}>
                        <Link style={{color:'inherit'}} to="/blogs">https://jsComplete.com</Link>
                    </div>
                </div>

                <div className="technology lang">
                    <LangTooltip language={language} />
                </div>
            </div>
        </div>
    )
}

export default SingleBlog;