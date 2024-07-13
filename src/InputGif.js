import { useState } from "react";
import Spinner from './Loader.js';
import useGif from "./useGif.js";


function InputGif(){

    const [gify, setGify] = useState("");
    const {fetchData, showLoading, gif}  = useGif(gify);

    return (
        <div className='generatorTab'>
            <p>Random {gify} gif</p>
            {
                showLoading? (<Spinner/>) : (<img src={gif} alt='gifImage'/>)
            }
            <input type="text" placeholder='Search gif' name='gify' value={gify} onChange={(event) => {setGify(event.target.value)}} />
            <button onClick={() => {fetchData()}}>GENERATE</button>
        </div>
    )
}

export default InputGif;