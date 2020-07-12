import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux'
 import {youPicked} from './actions/index.js';
 import {counter} from './actions/index.js'


const Winner = ({decision}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
         dispatch(counter(decision));
        }, 3000);
        return () => clearTimeout(timer);
      }, [dispatch,decision]);
   
    return(
        <div className='winnerContainer'>
        <div className='winner'>
            <div>
                {decision}
            </div>
            <button onClick={()=>dispatch(youPicked('EMPTY'))}>PLAY AGAIN</button>
        </div>
        </div>
    )
}

export default Winner;