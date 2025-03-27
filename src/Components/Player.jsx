import React from 'react'
import { assets, songsData } from '../assets/assets'

function Player() {
  return (
    <div className='Player h-[5%] bg-black flex justify-between items-center text-white px-4'>
      <div className="Left hidden lg:flex items-center gap-4">
        <img className='w-12' src={songsData[0].image} alt="" />
        <div className="song-name">
          <p>{songsData[0].name}</p>
          <p className='font-light'>{songsData[0].desc.slice(0,12)}</p>
        </div>
      </div>
      <div className="Center flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
        </div>
        <div className="Seekbar flex items-center gap-5">
          <p>1:05</p>
          <div className="w-[50vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr className='h-1 border-none w-0 bg-green-800 rounded-full' />
          </div>
          <p>3:25</p>
        </div>
      </div>
      <div className="Right hidden lg:flex items-center gap-1.5 opacity-75">
        <img className='w-4 cursor-pointer' src={assets.plays_icon} alt="" />
        <img className='w-4 cursor-pointer' src={assets.mic_icon} alt="" />
        <img className='w-4 cursor-pointer' src={assets.queue_icon} alt="" />
        <img className='w-4 cursor-pointer' src={assets.speaker_icon} alt="" />
        <img className='w-4 cursor-pointer' src={assets.volume_icon} alt="" />
        <div className="w-20 bg-slate-50 h-1 rounded cursor-pointer"></div>
        <img className='w-4 cursor-pointer' src={assets.mini_player_icon} alt="" />
        <img className='w-4 cursor-pointer' src={assets.zoom_icon} alt="" />
      </div>
    </div>
  )
}

export default Player
