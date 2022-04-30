import { useState } from 'react';

export const useCounter = ( initialState = 1 ) =>{
    
    const [counter, setCounter ] = useState(initialState);

    const incrementer = () => {
        setCounter( counter + 1 );
    }

    const decrementer = () => {
        setCounter( counter - 1 );
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