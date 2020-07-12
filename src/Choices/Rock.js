import React from 'react';
import rock from '../images/icon-rock.svg';

const Rock = ({id}) => {
    return(
        <div>
            <button className='rock' id={id}>
                <div>
                    <img src={rock} alt=''></img>
                </div>
            </button>
        </div>
    )
}

export default Rock;