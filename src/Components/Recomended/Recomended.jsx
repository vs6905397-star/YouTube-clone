import { useEffect, useState } from 'react'
import './Recomended.css'
import { API_KEY, value_convert } from '../../data'
import { Link } from 'react-router-dom'


const Recomended = ({categoryId}) => {

    const[apiData, setApiData] = useState([]);

    const fetchData = async ()=>{
        const relatedVideo_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

        await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items))

    }

    useEffect(()=>{
        fetchData();
 
    },[])

  return (
    <div className='recomended'>
        {apiData.map((item,index)=>{

           return (  
           <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={item.id} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{value_convert(item.statistics.viewCount)} views</p>
            </div>
        </Link>
        )

        })}
    </div>
  )
}

export default Recomended
