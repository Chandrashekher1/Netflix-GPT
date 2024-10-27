import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <h1 className='p-6 text-lg my-3 w-1/4'>{overview}</h1>

        <div>
            <button className='bg-black text-white text-xl px-12 p-3 rounded-lg '>▶  Play</button>
            <button  className='bg-red-600 m-3 text-white text-xl px-12 p-3 rounded-lg '>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle