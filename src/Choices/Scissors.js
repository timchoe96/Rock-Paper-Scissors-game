import React from 'react';
import scissors from '../images/icon-scissors.svg';

const Scissors = ({id}) => {
    return(
        <div>
             <button className='scissors' id={id}>
                <div>
                    <img src={scissors} alt=''></img>
                </div>
            </button>
        </div>
    )
}

export default Scissors;