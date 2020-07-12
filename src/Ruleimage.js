import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import rules from './images/image-rules.svg';
import x from './images/icon-close.svg';
import {rulesClick} from './actions/index.js';

const Ruleimage = () => {
    const checkRules = useSelector(state => state.rules);
    const dispatch = useDispatch();

    return(
        <div>
{checkRules === true? <div className='ruleImage'>
            <div className='name'>RULES</div>
            <img onClick={()=>dispatch(rulesClick())} className='x' src={x} alt=''></img>
            <img className='image' src={rules} alt=''></img>
        </div>:null}
        </div>
    )
}

export default Ruleimage;