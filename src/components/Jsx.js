import  React, {Fragment, createRef, useState} from 'react';


export default function Jsx (){

     const  agregarRef = createRef()
     const [lists , setLists] = useState([1,2,3,4,5])

        

    const addItem = ()=>{

        setLists([...lists, agregarRef.current.value])
        agregarRef.current.value = ""
    }

    return(
        <Fragment>
           
            <h1>frio o calor</h1>
            <input type="text" ref={agregarRef} />
            <button onClick={addItem}>agregar</button>
             <h4>
                 
                 {
                     lists.map((item, index) =>(
                     <p key={index}>{item} y su indice {index +1}</p>
                     ))
                 }
             </h4>
          
        </Fragment>
    )
}