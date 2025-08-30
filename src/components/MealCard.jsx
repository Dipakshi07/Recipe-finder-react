import React from 'react'
import { NavLink } from 'react-router-dom';

const MealCard = ({detail}) => {
    console.log(detail);
    
  return (
    <div className='meals w-full h-fit flex flex-wrap gap-10 justify-center items-center p-10'>
        {!detail ? "No data found": detail.map((item) =>{
           return(
              <div className='meal-card w-[250px] h-[350px] border-2 border-white bg-gray-300 rounded-lg flex flex-col justify-center items-center gap-5'>
                 <img className='w-[200px] h-[200px] rounded' src={item.strMealThumb}/>
                 <p className='text-center font-bold'>{item.strMeal}</p>
                 <NavLink to={`/${item.idMeal}`}>
                    <button className='bg-rose-300 px-10 py-1 rounded-lg font-semibold shadow-xl shadow-black '>Recipe</button>
                  </NavLink>
           </div>
           )
        })
        }

    </div>
  )
}

export default MealCard