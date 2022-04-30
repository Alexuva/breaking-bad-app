import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'

import '../styles/Quotes.css'

import logo from '../images/logo.png'


export const Quotes = () => {

    const { counter, incrementer, decrementer, reset } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { quote, author } = !!data && data[0];

    const handleDecrementer = () => {
        if( counter === 1){
            reset();
        }else{
            decrementer();
        }
    }

    const handleIncrementer = () => {
        if( counter === 30 ){
            reset()
        }else{
            incrementer()
        }
    }

    return (
        <div className='container'>
            <div className='logo-div'>
                <img src={ logo } alt="Logo Breaking Bad" className='logo' />
            </div>
            <div className='quotes-div'>
                    <p className='phrase'>{ quote }</p>
                    <p className='author'> - { author } - </p>
            </div>
            <div className='change-quote'>
                <p>Cita nº { counter }</p>
                <div className='buttons'>
                    <button className='back-button' onClick={ handleDecrementer }>Anterior</button>
                    <button className='next-button' onClick={ handleIncrementer }>Siguiente</button>
                </div>
            </div>
        </div>
    )
}
