import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import axios from 'axios'
// import Navbar from '../../../src/Components/Navbar'
import Navbar from '../Components/Navbar'


const SearchProduct = () => {
  const[search,setSearch]=useState([])
  const [searchText,setSearchText]=useState("")
  let limit=8
  useEffect(()=>{
    axios.get(`http://localhost:8080/NewArrivals`).then((res)=>setSearch(res.data))
  },[])
  console.log(search)
  return (
  
    <div className="App">
      <Navbar/>
      {/* <AllRoutes /> */}
      {/* <Home /> */}
      {/* <Footer /> */}
   <div className="templateContainer" class="grid md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-1">
    <div className="searchInput_Container">
      <input class="w-4/6 h-10 mt-10 border border-gray-200" id="searchInput" type="text"placeholder="search here..." onChange={(event)=>{
        setSearchText(event.target.value);
      }}/>

    </div>
    <div class="template_Container">
      {
        search.filter((val)=>{
          if(searchText=="")
          {
            return val;
          }
          else if(val.title.toLowerCase().includes(searchText.toLowerCase())){
            return val;
          }
        })
       .map((val)=>{
        return(
          <div style={{display:"inline-block",marginLeft:"20px",marginTop:"20px",boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 12px",width:"20vw" }}>
          <div key={val.id}>
           <Link to={`/NewArrivals/${val.id}`}>
            <img src={val.image}/></Link>
            <h3>{val.title}</h3>
            <p >{val.price}</p>
            <Link to={`/NewArrivals/${val.id}`}><Button class="border border-gray-500 rounded-1xl p-2 mb-2">Visit to Product </Button></Link>
            </div>
            </div>
        )
       })
      }
    </div>
   </div>
      </div>
  );
}

export default SearchProduct
