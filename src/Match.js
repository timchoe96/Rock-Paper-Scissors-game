import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import Winner from './Winner';


const Match = () => {

    const you = useSelector(state => state.choice);
    const house = useSelector(state => state.robot);
    const [display,setDisplay] = useState('none');
  

    function winner(){
        if(you.code===1 && house.code === 2){
            return <Winner decision='YOU LOSE'/>
        }else if(you.code===1 && house.code === 3){
            return <Winner decision='YOU WIN'/>
        }else if(you.code===2 && house.code === 3){
            return <Winner decision='YOU LOSE'/>
        }else if(you.code===2 && house.code === 1){
            return <Winner decision='YOU WIN'/>
        }else if(you.code===3 && house.code === 2){
            return <Winner decision='YOU WIN'/>
        }else if(you.code===3 && house.code === 1){
            return <Winner decision='YOU LOSE'/>
        }else{
            return <Winner decision='YOU TIED'/>
        }
    }

  function back (){
      if(winner().props.decision === 'YOU WIN'){
          return {you:'visible',house:'hidden'}
      }else if(winner().props.decision ==='YOU LOSE'){
          return {you:'hidden',house:'visible'}
      }else{
        return {you:'hidden',house:'hidden'}
      }
  }

console.log(back());

    function showWinner (){
        setDisplay('block')
    }

    useEffect(() => {
        const timer = setTimeout(() => {
         showWinner(); 
        }, 2000);
        return () => clearTimeout(timer);
      }, []);


 
    return(
        <div className='match'>
            
            <div className='youGroup'> 
                <h4>YOU PICKED</h4>
                
                {/* youpicked group */}
                <div className='youPicked'>
                    <div className='radial' style={{visibility:back().you}}> 
                            <div className='firstCircle'> 
                            <div className='secondCircle'> 
                            <div className='thirdCircle'> </div>
                        </div>
                        </div>
                        </div>
                      
                      <div className='front'> {you.type} </div>
                </div>
               
            </div>

            <div style={{display:display}}className='winner'>
             {winner()}
            </div>
            
            <div className='houseGroup'> 
                <h4>THE HOUSE PICKED</h4>
                 {/* housepicked group */}
                 <div className='housePicked'>
                            <div className='radial' style={{visibility:back().house}}>
                                    <div className='firstCircle'>       
                                    <div className='secondCircle'> 
                                    <div className='thirdCircle'> </div>
                        </div>
                         </div>
                         </div>   
                    <div className='shadow'></div>
                    <div className='front'>{house.type}</div>
                </div>

            </div>
            
        </div>
    )
}

export default Match;