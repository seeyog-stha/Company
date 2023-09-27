import React, { useEffect, useState } from 'react'

export default function useFetch(url,option=null) {
    const [data,setData]=useState(null)
    const [pending,setPending]=useState(true)
    const [error,setError]=useState(null)
    async function fetchData(url,options){
        try{
            let response=await fetch(url,options)
            let dataa=await response.json()
            setData(dataa)
            setPending(false)
        }
        catch(err){
            setError(err.message)
            setPending(false)
        }
    }
    useEffect(()=>{
        
            
            fetchData(url,option)
        
    },[url])
    return {data,error,pending}

}
