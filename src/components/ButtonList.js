import React from 'react'
import Button from './Button'

const list =["All" , "Mixes" , "Gaming" , "Music" , "Cricket" , "Javascript" , "News" , "Cooking", "Podcasts" , "Education" , "Movies" , "Art" ] 

const ButtonList = () => {
  return (
    <div className="flex pt-2 px-3" >
      {list.map((item)=>(
        //console.log(item);
        <Button name={item}  />
      ))}
      
    </div>
  )
}

export default ButtonList