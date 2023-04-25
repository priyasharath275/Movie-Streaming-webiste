import React from 'react'

const VideoCard = ({info}) => {
    
    const {snippet,statistics} = info;
   const {channelTitle,title,thumbnails } = snippet;
 const {commentCount,favoriteCount,likeCount,viewCount} = statistics;
  return (
    <div className='m-2 p-2 w-60 shadow-md'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnails"/>
     <ul>
        <li className='font-bold py-2 break-words '>{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} Views,{likeCount} likes</li>
     </ul>
    </div>
  )
}

export default VideoCard

