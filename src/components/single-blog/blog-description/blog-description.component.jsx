import React from 'react'
import './blog-description.styles.scss'

const BlogDescription = ({description}) => <div className='description' dangerouslySetInnerHTML={{ __html: (description) }} />

export default BlogDescription;
