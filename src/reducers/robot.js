import Rock from '../Choices/Rock.js';
import Paper from '../Choices/Paper.js';
import Scissors from '../Choices/Scissors.js';
import React from 'react';


export const robot = (state='',action) => {
    switch(action.type){
        case 'ROBOT_ROCK':
        return {type:<Rock id='animation1'/>,code:1}

        case 'ROBOT_PAPER':
        return {type:<Paper id='animation2'/>,code:2}

        case 'ROBOT_SCISSORS':
        return {type:<Scissors id='animation3'/>,code:3}

        default:
        return state
    }
}