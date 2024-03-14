import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARH_API } from '../utils/constant'

const Header = () => {

  const[searchQuery , setSearchQuery] = useState()
  //console.log(searchQuery)

  useEffect(()=>{
    //API Call
    const timer = setTimeout(()=>getSearchSuggestion(),200)
    return ()=>{
      clearTimeout(timer)
    }
    
  },[searchQuery])

  const getSearchSuggestion = async()=>{
    console.log(searchQuery)
    const data = await fetch(YOUTUBE_SEARH_API+searchQuery)
    const json = await data.json()
    console.log(json[1])
  }

  const dispatch = useDispatch()





const toggleMenuHandler = ()=>{
  dispatch(toggleMenu());

};


  return (
    <div className='grid grid-flow-col shadow-lg '  >

<div className='flex  col-span-1 m-2' >
<img className='h-6 m-3  cursor-pointer'  
onClick={toggleMenuHandler}
alt='menu' 
src='https://imgs.search.brave.com/VDkctdkNatiSmpjLTAb2HrWzP0OpePN5IlxNVLtk7Nw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzA5LzQ1Lzgw/LzM2MF9GXzEwOTQ1/ODAxNV9Rc1dtY2hs/enV3Q1pQcUlVV1I3/SGNURHNiYnB0ZWpS/di5qcGc' />
<img className='h-12 cursor-pointer' alt='youtubeicon' src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg" />
</div>

<div className='col-span-10 px-10 ' >
<input className='my-3 w-1/2 border border-gray-400 p-2 rounded-l-full ' 
 type='text'
 value={searchQuery}
 onChange={(e)=>setSearchQuery(e.target.value)}
 ></input>
<button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100' >🔍</button>
</div>

<div className='col-span-1' >
<img className=' m-3 h-8'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDt6YUZ8byMEXMW-FqLnk72EfrpTC-hcBKjQ&usqp=CAU' />
</div>


    </div>
  )
}

export default Header