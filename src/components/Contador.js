import React, {Fragment, useState} from 'react'


export const Contador = ()=>{

    const [count, setCount] = useState(0);


    const aumentar = ()=>{
        setCount(count +1 )
    }
        return(
        <Fragment>
            <h1>desde el contador </h1>
            <p>{count}</p>
            <button onClick={aumentar}>+</button>
        </Fragment>
        )
}