import React from 'react';
import paper from '../images/icon-paper.svg';

const Paper = ({id}) => {
    return(
        <div>
             <button className='paper' id={id}>
                <div>
                     <img src={paper} alt=''></img>
                     
                </div>
            </button>
        </div>
    )
}

export default Paper;