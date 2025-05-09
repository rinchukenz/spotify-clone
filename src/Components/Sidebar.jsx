import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Sidebar() {

  const navigate = useNavigate();

  return (
    <div className='Sidebar hidden w-[25%] h-full p-2 flex-col gap-3 text-white lg:flex'>
      <div className="bg-[#121212] flex flex-col justify-around gap-2 p-3">
        <div className='flex gap-3 pl-8 cursor-pointer items-center'>
          <img className='w-5' src={assets.home_icon} alt="" />
          <p onClick={() => navigate("/")} className='font-bold hover:scale-103'>Home</p>
        </div> 
        <div className='flex gap-3 pl-8 cursor-pointer items-center'>
          <img className='w-5' src={assets.search_icon} alt="" />
          <p className='font-bold hover:scale-103'>Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[100%]">
        <div className="flex p-3 justify-between items-center">
          <div className="flex gap-3 pl-8 items-center">
            <img className='w-7' src={assets.stack_icon} alt="" />
            <p className='font-semibold'>Your library</p>
          </div>
          <div className="flex gap-2">
            <img className='w-4 h-4' src={assets.arrow_icon} alt="" />
            <img className='w-4 h-4' src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="Create-Playlist gap-1 bg-[#242424] m-3 p-4 flex flex-col font-semibold justify-start">
          <h1 className='text-[15px]'>Create your first Playlist</h1>
          <p className='font-light text-[14px]'>Its easy we will help you</p>
          <button className='w-[60%] bg-white rounded-full px-2.5 py-1 text-black text-[15px] mt-2 cursor-pointer hover:scale-103'>Create Playlist</button>
        </div>
        <div className="Create-Playlist gap-1 bg-[#242424] m-3 p-4 flex flex-col font-semibold justify-start">
          <h1 className='text-[15px]'>Let's find some podcasts to follow</h1>
          <p className='font-light text-[14px]'>We'll keep you updated on new episodes</p>
          <button className='w-[60%] bg-white rounded-full px-2.5 py-1 text-black text-[15px] mt-2 cursor-pointer hover:scale-103'>Browse Podcasts</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
