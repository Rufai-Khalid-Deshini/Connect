import React, { useState } from 'react'
import { IoChatbubbleOutline, IoHeart, IoHeartOutline, IoPerson, IoShareOutline } from 'react-icons/io5';

const PostCard = (props) => {

    const [likeCount, setLikeCount] = useState(props.likes);
    const [liked, setLiked] = useState(false);

    return (
        <div className='w-11/12 mx-auto mt-4 p-3 outline-1 outline outline-gray-500 dark:outline-none dark:bg-zinc-900 dark:text-white rounded-lg flex flex-row items-start justify-start gap-4'>
                <div>
                    <IoPerson size='3em' className='outline p-2 rounded-full' />
                </div>
                <div className='flex flex-col gap-3 w-full'>
                    <div>
                        <p>{props.fullname}</p>
                        <p className='text-gray-400 text-sm -mt-1'>@{props.username}</p>
                    </div>
                    <p>{props.content}</p>
                    <p className='self-end text-xs text-gray-500'>Posted ● {props.time.slice(0, 10).replaceAll('-', '/')}, {props.time.slice(11, 16)}</p>
                    <div className='flex flex-row items-center justify-around'>
                        <div className='flex flex-row items-center justify-between gap-2'>
                            {liked ? (
                                <IoHeart color='#a0a' onClick={() => {!liked?setLikeCount(likeCount+1):setLikeCount(likeCount-1); setLiked(!liked)}} size='1.3em' className='cursor-pointer' />
                            ):(
                                <IoHeartOutline onClick={() => {!liked?setLikeCount(likeCount+1):setLikeCount(likeCount-1); setLiked(!liked)}} size='1.3em' className='cursor-pointer' />
                            )}
                            <p onClick={() => {!liked?setLikeCount(likeCount+1):setLikeCount(likeCount-1); setLiked(!liked)}}>{props.likes}</p>
                        </div>
                        <div className='flex flex-row items-center justify-between gap-2'>
                            <IoChatbubbleOutline size='1.3em' className='cursor-pointer' />
                            <p>{props.comments}</p>
                        </div>
                        <div className='flex flex-row items-center justify-between gap-2'>
                            <IoShareOutline size='1.3em' className='cursor-pointer' />
                            <p>{props.shares}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PostCard