import { useState } from "react";
import MealCard from "./MealCard";

const MainPage = () => {

  const [data , setData] = useState();
  const [search , setSearch] = useState("");
  const [msg,setMsg] = useState("");

  const handleInput = (e) =>{
       setSearch(e.target.value);
  }

  const myFun = async () => {
      if(search == ""){
        setMsg("Please enter a valid recipe name");
      }
      else{
         const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
         const jsonData = await get.json();
         //console.log(jsonData.meals);
         setData(jsonData.meals);
         setMsg("");
      }
    }
    //console.log(data);
    

  return (
    <>
      <div className='container mt-28 text-center w-screen' >
          <h1 className='font-bold text-3xl'>Recipe Finder</h1>
          <div className='searchbar mt-12 w-full'>
                <input className='w-72 h-10 rounded-xl border-2 border-black px-4' type='text' placeholder='Enter your recipe here' 
                  onChange={handleInput}/>
                 <button className='w-32 h-11 rounded-xl bg-rose-400 text-lg mx-2 font-semibold' onClick={myFun}>Search</button>
          </div>
          <p className="text-red-500 font-semibold mt-4">{msg}</p>
           <div>
                  <MealCard detail={data}/>
           </div>
      </div>
     
    </>
  )
}

export default MainPage;