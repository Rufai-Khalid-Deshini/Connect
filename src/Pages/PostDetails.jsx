import React from 'react'
import { useParams } from 'react-router-dom'

const PostDetails = () => {
    const { id } = useParams();

    const addComment = () => {
        
    }
    return (
        <div className='dark:bg-slate-900 dark:text-white'>
            <p>{id}</p>
        </div>
    )
}

export default PostDetails