import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

function DisplayHome() {
  return (
    <>
      <Navbar />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className="Albums flex overflow-auto">
        {
        albumsData.map((item,index) =>{
            return(
                <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
            )
        })
        }
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Todays Biggest Hits</h1>
        <div className="Albums flex overflow-auto">
        {
        songsData.map((item,index) =>{
            return(
                <SongItem key={index} name={item.name} id={item.id} image={item.image} desc={item.desc} />
            )
        })
        }
        </div>
      </div>
    </>
  )
}

export default DisplayHome
