import React from 'react';
import Score from './Score';
import Game from './Game';
import Rules from './Rules';
import {useSelector} from 'react-redux';
import Ruleimage from './Ruleimage';
import Match from './Match';

const App = () => {
    const state = useSelector(state => state.rules);
    const choice = useSelector(state => state.choice);

    function opacity (){
        if(state===true){
            return {backgroundColor:'black',opacity:'0.5',}
        }else{
            return {}
        }
    }

    return(
        <div className='body'>
             <div className='container' style={opacity()}>
                <Score/>
        {choice === 'EMPTY'?<Game/>:<Match/>}
                <Rules/>
             </div>
             <Ruleimage/>
        </div>
    )
}

export default App;