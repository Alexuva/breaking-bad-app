import { useEffect, useState } from "react";

export const useFetch = ( url ) => {
    
    const [state, setState] = useState({ data: null, error: null });

    useEffect( () => {

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                setState({
                    error: null,
                    data
                })
            })

    }, [url])

    return state;

}