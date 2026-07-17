import React, { useReducer } from 'react'
import usePush from './usePush';
import axios from 'axios';

function reducer(state , action){
    switch (action.type){
        case "input" : {
            console.log(action)
            return {...state , [action.name] : action.payload };
        }
        default : {
            return state ;
        }
    }
}


function Form() {
    const [input , dispatch] = useReducer(reducer , {product:'' , price : ''});
    const submitHandler = async(e)=>{
        e.preventDefault();
        console.log(input);
        const res = await axios.post(`http://localhost:3000/products` , input)
        console.log(res);
    }
  return (
    <div>
        
    </div>
  )
}

export default Form