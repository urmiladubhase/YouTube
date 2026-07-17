const VideoCard = ({info}) => {
    //console.log(info);
    if (!info) return null; 
    const {snippet , statistics} = info;
    const {channelTitle, title, thumbnails} = snippet; 
  
  return (
    <div className="w-72 shadow-lg rounded-lg m-2 text-wrap">
      <img alt="thumbnail" className=" p-2 rounded-lg" src ={thumbnails?.medium?.url}></img>
      <ul className="px-3 m-2 ">
        <li className="font-bold ">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} Views</li>
      </ul>
    </div>
  )
}

export const AdVideoCard = ({info}) =>{
  return(
    <div className="border-red-600 border-solid">
      <VideoCard info={info}/>

    </div>
  )
}

export default VideoCard