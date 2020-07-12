import React from 'react';
import triangle from './images/bg-triangle.svg';
import Rock from './Choices/Rock';
import Paper from './Choices/Paper';
import Scissors from './Choices/Scissors';
import {useDispatch} from 'react-redux';
import {youPicked} from './actions/index.js';
import {housePicked} from './actions/index.js';

const Game = () => {

    function random (){
        let number = Math.random();
       if(number>0 && number <=  0.33){
           return 'ROBOT_ROCK'
       }else if(number > 0.33 && number <= 0.66){
           return 'ROBOT_PAPER'
       }else{
           return 'ROBOT_SCISSORS'
       }
    }

    const dispatch = useDispatch();
    function dispatchAll(type){
        dispatch(youPicked(type))
        dispatch(housePicked(random()))
    }
    return (
        <div className='game'>
            <div  className='triangle' >
                <img src={triangle} alt=''></img> 
                <div onClick={()=>dispatchAll('ROCK')}className='gameRock'>
                    <Rock/>
                </div>
                <div onClick={()=>dispatchAll('PAPER')} className='gamePaper'>
                    <Paper/>
                </div>
                <div onClick={()=>dispatchAll('SCISSORS')} className='gameScissors'>
                    <Scissors/>
                </div>
            </div>
            
        </div>
    )
}

export default Game;