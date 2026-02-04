import React from "react";
import { useNavigate } from "react-router-dom";
import "./MealCard.css";

const MealCard = ({ detail }) => {
  const navigate = useNavigate();

  return (
    <div className="meals">
      {!detail
        ? "No data found"
        : detail.map((item) => {
            return (
              <div
                className="meal-card"
                key={item.idMeal}
                onClick={() => navigate(`/${item.idMeal}`)}
              >
                <img src={item.strMealThumb} alt={item.strMeal} />
                <p>{item.strMeal}</p>
                <button>View Recipe</button>
              </div>
            );
          })}
    </div>
  );
};

export default MealCard;
