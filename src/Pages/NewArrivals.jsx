import axios from 'axios'
import React, { useState } from 'react'

const NewArrivals = () => {
    const [data,setData]=useState([])
    const [filter,setFilter]=useState(data)
    const[loading,setLoading]=useState(false)
    
    useEffect(()=>{
        const getProducts=async()=>{
            setLoading(true)
            const res=await axios('http://localhost:8080/NewArrivals').then((res)=>console.log(res))
        }
        getProducts()
    },[])
  return (
    <div>
      
    </div>
  )
}

export default NewArrivals
