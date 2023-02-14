import { useState } from 'react'


export const useCounter = ( initialValue = 10 ) => { //esto significa que si el initial value no lo manda la persona será por defecto 10

    const [counter, setCounter] = useState( initialValue )


    
    const increment = (value = 1) => {
        setCounter( counter + value );
    }

    const reset = () => {
        setCounter( initialValue )
    }

    const reduce = (value) => {
        if( counter === 0 )return;
        setCounter( counter - value )
    }


    return {
        counter,
        increment,
        reset,
        reduce,
    }
}