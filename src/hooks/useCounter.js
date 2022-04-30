import { useState } from 'react';

export const useCounter = ( initialState = 1 ) =>{
    
    const [counter, setCounter ] = useState(initialState);

    const incrementer = () => {
        if(counter === 30){
            setCounter( 1 );
        }else{
            setCounter( counter + 1 )
        }
        
    }

    const decrementer = () => {
       if( counter === 1){
           setCounter( 30 )
       }else{
           setCounter( counter - 1 )
       }
    }

    const reset = () => {
        setCounter( initialState );
    }

    return{
        counter, 
        incrementer, 
        decrementer, 
        reset
    };
}