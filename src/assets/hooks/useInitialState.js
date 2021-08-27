import axios from 'axios';
import { useEffect,useState  } from 'react';

const useInitialState =(API) => {
    const [videos,setVideos] = useState({ mylist: [], trends: [], originals: [] })

   /* useEffect(()=>{
        fetch(API)
        .then(response=> response.json())
        .then(data => setVideos(data))
        .catch(error=> console.log(error))
    },[]);*/

    useEffect(()=>{
        axios.get("https://localhost:44357/WeatherForecast")
            .then((respuesta) => {
                console.log(respuesta.data);
            });
    },[]);

    return videos;
}

export default useInitialState