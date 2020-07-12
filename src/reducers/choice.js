import Rock from '../Choices/Rock.js';
import Paper from '../Choices/Paper.js';
import Scissors from '../Choices/Scissors.js';
import React from 'react';



export const choice = (state='EMPTY',action) => {
    switch(action.type){
        case 'ROCK':
        return {type:<Rock id='animation4'/>,code:1}

        case 'PAPER':
        return {type:<Paper id='animation5'/>,code:2}

        case 'SCISSORS':
        return {type:<Scissors id='animation6'/>,code:3}

        case 'EMPTY':
        return 'EMPTY'

        default:
        return state
    }
}