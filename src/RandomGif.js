import Spinner from './Loader.js';
import useGif from "./useGif.js";


function RandomGif(){

    const {fetchData, showLoading, gif}  = useGif();

    return(

        <div className='generatorTab'>
            <p>A Random gif</p>

            {
                showLoading? (<Spinner/>) : (<img src={gif} alt='gifImage'/>)
            }
        
            <button onClick={() => {fetchData()}}>GENERATE</button>
        </div>
        
    )
}

export default RandomGif;