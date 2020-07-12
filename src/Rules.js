import React from 'react';

import {useDispatch} from 'react-redux';
import {rulesClick} from './actions/index.js';


const Rules = () => {
const dispatch = useDispatch();

    return (
    <div className='rules'>
        <div onClick={()=>dispatch(rulesClick())}className='ruleClick'>
            R U L E S
        </div>
    </div>
    )
}

export default Rules;