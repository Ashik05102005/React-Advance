import axios from "axios";
import React,{useState,useEffect} from "react";
function useUser(url){
    const [user,setUser]=useState([])

    useEffect(()=>{
        const fetchUsers=async()=>{
            try{
                const response=await axios.get(url)
                setUser(response.data)
            }
            catch(error){
                console.log(error.message)
            }
        }
        fetchUsers();
    },[url]);
    
    return user;

}
export default useUser;