import React from 'react';
import logo from './images/logo.svg';
import {useSelector} from 'react-redux';

const Score = () => {
    const score = useSelector(state => state.score);
    return (
        <div className='scoreBoard'>
               <img src={logo} alt=''></img>
            <div className='score'>
                <div>S C O R E</div>
                <div className='number'>{score}</div>
            </div>
        </div>
    )
}

export default Score;
