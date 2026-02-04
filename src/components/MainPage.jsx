import { useState } from "react";
import MealCard from "./MealCard";
import "./Mainpage.css"

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
      <div className='container' >
          <h1>Recipe Finder</h1>
          <div className='searchbar'>
                <input type='text' placeholder='Enter your recipe here' 
                  onChange={handleInput}/>
                 <button onClick={myFun}>Search</button>
          </div>
          <p >{msg}</p>
           <div>
                  <MealCard detail={data}/>
           </div>
      </div>
     
    </>
  )
}

export default MainPage;
