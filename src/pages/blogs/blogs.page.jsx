import React from 'react'
import './blogs.styles.scss'
import { Link } from 'react-router-dom'
import { blogsData } from '../../data/blog.data'
import BlogComponent from '../../components/blog/blog.component'

const Blogs = () => {
    return (
        <div className="blogs-page">
            <div className="blogs-header">
                <Link to="#">
                    <div className="blogs-logo">
                        <img src="https://cdn-images-1.medium.com/max/300/1*XFy9Re3P8QU2GEPv5UKCRw@2x.png" alt="Learn full-stack JavaScript from A to Z for FREE"/>
                    </div>
                </Link>
                <div className=" blogs-title">
                Learn full-stack JavaScript from A to Z for FREE
                </div>
            </div>

            <div className="blogs-container">
                {
                    blogsData && blogsData.map( blog => <BlogComponent blog={blog} id={blog.id} columnGrid={3} /> )
                }
            </div>

        </div>
    )
}

export default Blogs;