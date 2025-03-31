import React, { useContext } from 'react'
import { assets,} from '../assets/assets'
import { PlayerContext } from '../Context/PlayerContext'

function Player() {

  const {seekBar,seekBg,play,pause,playStatus,track,next,prev,time,seekSong} = useContext(PlayerContext);

  return (
    <div className='Player h-[5%] bg-black flex justify-between items-center text-white px-4 mt-5'>
      <div className="Left hidden lg:flex items-center gap-4">
        <img className='w-12' src={track.image} alt="" />
        <div className="song-name">
          <p>{track.name}</p>
          <p className='font-light'>{track.desc.slice(0,12)}</p>
        </div>
      </div>
      <div className="Center flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
          <img onClick={prev} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
          {
            playStatus ? 
            <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
            : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
          }
          <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
        </div>
        <div className="Seekbar flex items-center gap-5">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekSong} className="w-[50vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
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
