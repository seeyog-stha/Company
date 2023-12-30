import React, { useEffect, useState } from 'react'

export default function useFetch(url) {
    const [value,setValue]=useState(null)
    const [pending,setPending]=useState(true)
    const [error,setError]=useState(null)
    const myHeaders = new Headers();
  
  myHeaders.append("x-collection-access-token", "db5ab6a2-69a3-426a-8eee-4d1f075d9e76");
    async function fetchData(url){
        try{
            let response=await fetch(url)
            let dataa=await response.json()
            setValue(dataa)
            setPending(false)
        }
        catch(err){
            setError(err.message)
            setPending(false)
        }
    }
    useEffect(()=>{
        
            
            fetchData(url)
        
    },[url])
    return {value,error,pending}

}
