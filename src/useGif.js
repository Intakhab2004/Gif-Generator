import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

function useGif(gify){

    const [showLoading, setshowLaoding] = useState(false);
    const [gif, setgif] = useState("");
    const searchUrl = `https://api.giphy.com/v1/gifs/random?api_key=UhR9eGyE9eNg3xTG6PKzbHVtMHdbFlxT&tag=${gify}&rating=g`
    const url = "https://api.giphy.com/v1/gifs/random?api_key=UhR9eGyE9eNg3xTG6PKzbHVtMHdbFlxT&tag=&rating=g";
    
    
    async function fetchData(){
        setshowLaoding(true);
        try{
        const {data} = await axios.get(gify ? searchUrl : url);
        const imgSource = data.data.images.downsized_large.url;
        setgif(imgSource);
        }
        catch(err){
      
        }
        setshowLaoding(false);
    }

  useEffect(() => { fetchData() }, [])

  return {fetchData, showLoading, gif}

}

export default useGif;