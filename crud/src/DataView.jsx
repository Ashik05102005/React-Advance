import axios from 'axios'
import React, { useEffect, useState , useReducer} from 'react'
import { Link, useNavigate } from 'react-router-dom';

function reducer(state , action){
    switch (action.type){
        case "input" : {
            console.log(action)
            return {...state , [action.name] : action.payload };
        }
        case "edit" : {
            return {...state , title : action.payload.title ,  price:action.payload.price}
        }
        default : {
            return state ;
        }
    }
}


function DataView() {
    const [productData , setProductData]= useState([]);
    const [input , dispatch] = useReducer(reducer , {title:'' , price : ''});
    const [edit , setEdit] = useState(null);
    const navigate = useNavigate();
    const fetchData = async()=>{
        const res = await axios.get(`http://localhost:3000/products`);
        console.log(res.data);
        setProductData(res.data)
    }
    useEffect(()=>{
        fetchData()
    },[]);
    const deleteHandler = async(id)=>{
        console.log("dealete" , id);
        const res = await axios.delete(`http://localhost:3000/products/${id}`)
        console.log(res);
    }
    const editHandler = async(data)=>{
        console.log(data);
        setEdit(data.id);
        dispatch({type :"edit" , payload : data})
    }
    const submitHandler = async(e)=>{
        if(edit){
            console.log(true )
            const res = await axios.put(`http://localhost:3000/products/${edit}` , input);
            setEdit(null)
            dispatch()
            return
        }
        e.preventDefault();
        console.log(input);
        const res = await axios.post(`http://localhost:3000/products` , input)
        console.log(res);
    }
  return (
    <div>
        <div className='flex w-full h-100 justify-center items-center'>
            <form  
            className='shadow-xl rounded-xl border border-gray-200 w-1/2 h-60 flex flex-col p-5 gap-5 justify-around'
            onSubmit={submitHandler}>
                <input 
                className='border border-gray-300 p-2 rounded'
                value={input.title}
                type='text'
                placeholder='enter product name'
                onChange={(e)=>{dispatch({type :  "input" , name : "title" , payload : e.target.value })}}
                >
                </input>
                <input 
                className='border border-gray-300 p-2 rounded'
                value={input.price}
                type='text'
                placeholder='enter price'
                onChange={(e)=>{dispatch({type :  "input" , name: "price"  , payload : e.target.value })}}
                >
                </input>
                <button className='border py-1 rounded bg-gray-800 text-gray-100'>Create</button>
            </form>
        </div>
        {/* <div className='h-20 flex items-center text-xl b'><Link to={'/form'}>create</Link></div> */}
        <div className='flex flex-wrap justify-around gap-5 m-5'>
            {productData.map(x=>(<div className='flex flex-col gap-3 w-50 border border-gray-200 rounded-xl shadow-md p-3'>
               {/* <p>{x.id}</p> */}
               <p>{x.title}</p>
               <p>{x.price}</p>
               <button className='border rounded bg-gray-500 text-gray-50'
               onClick={()=>editHandler(x)}>edit</button>
               <button onClick={()=>deleteHandler(x.id)}>delete</button>
            </div>))}
        </div>
    </div>
  )
}

export default DataView