import axios from "axios";
import {useState,useEffect} from "react";
import {AiOutlineHeart} from "react-icons/ai"
import { Card,Button,Heading,Stack,Text,Divider,ButtonGroup,Image, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'



const getCurrentPage=(value)=>{
  value=Number(value);
  if(typeof value=="number" && value<=0)
{
    value=1
}
if(!value){
    value=1
}
return value
}

const getUrl=(url,sort,orderBy)=>{
  if(sort && orderBy){
    return(url =`${url} &_sort=${sort}&_order=${orderBy}`)
  }
  return url
}

function NewArrivalComp({image, id, price, src, strike,brand}) {
  const [data,setData]=useState([])
    const [filter,setFilter]=useState(data)
    const[loading,setLoading]=useState(false)
    const[searchParams,setSearchParams]=useSearchParams()
  const [orderBy,setOrderBy]=useState("")
    const[page,setPage]=useState(getCurrentPage(searchParams.get("page"))||1)
  const sort="price"
    // let componentMount=true
    
    const postItem = async (id) => {
        let result1 = await axios.get(`http://localhost:8080/${brand}/${id}`);
        const newObj = result1.data;
        let result2 = await axios.post(
          ` http://localhost:8080/Wishlistnewarrivals`,
          newObj
        );
        // return axios.post
      };
      const handleClick = (id) => {
        // addTowishList();
        setData([...data, id]);
        postItem(id);
        console.log(id);
      };
    // useEffect(()=>{
    //     const getProducts=async()=>{
    //         setLoading(true)
    //         let res=await fetch('http://localhost:8080/NewArrivals ')
    //         if(componentMount){
    //           setData(await res.clone().json())
    //           setFilter(await res.json())
    //           setLoading(false)
    //           console.log(filter)
    //         }
    //         return ()=>{
    //           componentMount=false
    //         }
    //     }
    //     getProducts()
    // },[])

    
    useEffect(()=>{
      setLoading(true)
      let apiUrl=getUrl(`http://localhost:8080/NewArrivals?`,sort,orderBy)
      fetch(apiUrl) 
      .then((res)=>res.json())
      .then((json)=>{
           setData(json)
      setLoading(false)
       })
       .catch((err)=>{
           console.log(err)
       })
    },[page,orderBy])


    // useEffect(()=>{
    //     let paramObj={page}
    //     if(orderBy){
    //       paramObj.orderBy=orderBy
    //     }
    //     setSearchParams(paramObj)
    // },[page,orderBy])


    const Loading=()=>{
      return (
        <>
       <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="Loading..."/>
        </>
      )
    }

    const filterProduct=(cat)=>{
      const updatedList=data.filter((x)=>x.category==cat)
      setFilter(updatedList)
    }

    const ShowProducts=()=>{
    return( 
      <>
       <div class="text-center  inline-block flex" >
       
       <div class="rounded-full ml-40">
          <img class="rounded-full m-auto" src="https://images.dailyobjects.com/marche/icons/new-arrival/all.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1"/>
          <button class="rounded-full outline outline-offset outline-1 p-2 mt-2 " onClick={()=>setFilter(data)}>All</button>
        </div>
        
        <div class="rounded-full ml-20">
          <img class="rounded-full m-auto" src="https://images.dailyobjects.com/marche/icons/category/watchbands-filter-icon-for-new-arrival.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1"/>
          <button class="rounded-full outline outline-offset outline-1 p-2  ml-2 mt-2 " onClick={()=>filterProduct("watch")}>Watchbands</button>
        </div>
        
        <div class="rounded-full ml-20">
          <img class="rounded-full m-auto" src="https://images.dailyobjects.com/marche/icons/category/platrorm-desk-collection.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1"/>
          <button class="rounded-full outline outline-offset outline-1 p-2 ml-2 mt-2 " onClick={()=>filterProduct("Desks")}>Desks</button>
        </div>
        
        <div class="rounded-full ml-20">
           <img class="rounded-full m-auto" src="https://images.dailyobjects.com/marche/icons/category/laptop-brifcae-new-arrival-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1"/>
           <button class="rounded-full outline outline-offset outline-1 p-2 ml-2 mt-2 " onClick={()=>filterProduct("messengerbags")}>Messenger Bags</button>
        </div>
        
        <div class="rounded-full ml-20"><img class="rounded-full m-auto" src="https://images.dailyobjects.com/marche/icons/category/laptop-brifcae-new-arrival-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1"/>
        <button class="rounded-full outline outline-offset outline-1 p-2 ml-2 mt-2 " onClick={()=>filterProduct("stand")}>Stand</button>
        </div>
        <div class="rounded-full ml-20"><img class="rounded-full m-auto" src="https://images.dailyobjects.com/marche/assets/images/other/charging-solution-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1"/>
        <button class="rounded-full outline outline-offset outline-1 p-2 ml-2 mt-2 " onClick={()=>filterProduct("mackbook sleeves")}>MackBook Sleeves</button>
        </div>
        
        <div class="rounded-full ml-20"><img class="rounded-full m-auto" src="https://images.dailyobjects.com/marche/icons/new-arrival/all.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1"/>
        <button class="rounded-full outline outline-offset outline-1 p-2 ml-2 mt-2 " onClick={()=>filterProduct("Pedal Backpack")}>Pedal Backpack</button>
        </div>
      </div>
     
     
 
     {/* cards  */}
      <div class="flex gap-2  justify-end mt-8 ">
       <h1 class="font-size-200"> Filter:</h1>
        <button class="outline outline-offset-2 outline-1" onClick={()=>setOrderBy("asc")}>LowToHigh</button>
        <br/><button class="outline outline-offset-2 outline-1"  onClick={()=>setOrderBy("desc")}>HighToLow</button>
        <br/><button class="outline outline-offset-2 outline-1"  onClick={()=>setOrderBy("")}>Reset</button>
      </div>
      {
        filter.map((el)=>{
          return(
            
            <div style={{ textAlign: "start",display:"inline-block" }}>
      <div style={{ backgroundColor: "rgb(247,247,247)" ,marginLeft:"20px"}}>
        <img src={el.image} alt="" />
        <Button
          isDisabled={data.includes(el.id)}
          size={"lg"}
          onClick={() => handleClick(el.id)}
        >
          {data.includes(el.id) ? `Added To The list` : `❤️Add To Wishlist`}
        </Button>
      </div>
      <br />
      <Heading as={"h4"} size={"xs"}>
        {el.title}
      </Heading>
      <h1>
        {el.price} 
      </h1>
      <Heading size={"xs"} color="red">
        BUY 1 GET 1 FREE
      </Heading>
    </div>
            // <span class="inline-block shadow-sm mt-20 w-200 ml-20">
            //   <div  >
            //   <div class="p-2">
            //     <img src={el.image}/>
            //     <div>
            //       <h5 class="ml-10">
            //          {el.title}
            //       </h5>
            //       <p class="ml-10">
            //          {el.price}
            //       </p>
            //       <p class="ml-10">{el.brand}</p>
                  
            //       <Button class=" ml-20 p-1 mt-10  bg-teal-800 text-white rounded border border-black-600">Add To Cart</Button>
            //       <Button class=" ml-40 p-1 mt-10"><AiOutlineHeart /></Button>
            //     </div>
            //   </div>
            //   </div>
            // </span>
            // <div class="shadow-xl ml-10 w-80 pb-2 flex flex-wrap "  style={{border:"1px solid red"}} key={el.id}>
              
            //   <img class="   m-auto w-2/3 relative cursor-pointer"src={el.image} alt={el.title}/>
            //   <p class="ml-8">{el.title}</p>
            //   <p class="ml-8">Price:{el.price}</p>
              
            //   <u class="ml-10 mb-10 text-red-600 font-medium">{el.brand}</u>
            //   {/* <p><AiOutlineHeart class="relative text-3xl ml-80 cursor-pointer mx-2 my-2"/></p> */}
            // </div>
           
          

            
          )
        })
      }
        <div style={{margin:"auto",marginTop:"30px"}}>
   <Button ml={700}   disabled={page==1} onClick={()=>setPage(page-1)}>Prev</Button>
   <Button ml={10} >{page}</Button>
   <Button ml={10}onClick={()=>setPage(page+1)}>next</Button>
   </div>
     </>
      )
    }
  return ( 
  <div>
    <img class="cursor-pointer"src="https://images.dailyobjects.com/marche/assets/images/other/key-valentines-offer-banners-homepage-desktop.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60"/>
    <h1 class="font-sarif text-3xl  mt-2 text-center">New Arrivals</h1>
   
    
   
    {loading?<Loading/>:<ShowProducts/>}
  

</div>
  );
}

export default NewArrivalComp;
