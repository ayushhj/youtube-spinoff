import react from 'react'

const VideoCard = ({info})=>{
    //console.log(info)

//    const channelTitle = info?.snippet
//    const title = info?.snippet
//    const thumbnails = info?.snippet
// const statistics = info?.statistics
return(
    <div className='p-2 m-2 w-72 shadow-lg'  >
        <img className='rounded-lg' alt='thumbnail' src={info?.snippet?.thumbnails?.medium?.url}  />
        <ul>
            <li className='font-bold py-2' >{info?.snippet?.title}</li>
            <li>{info?.snippet?.channelTitle}</li>
            <li>{info?.statistics?.viewCount} Views</li>
        </ul>


    </div>
)
}

export default VideoCard