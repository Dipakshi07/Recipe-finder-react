import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Mealinfo.css";

const MealInfo = () => {
  const { mealId } = useParams();
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const getInfo = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const jsonData = await res.json();
      setInfo(jsonData.meals[0]);
    } catch (error) {
      console.error("Error fetching meal:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInfo();
  }, [mealId]);

  if (loading) {
    return (
      <div className="meal-info-page">
        <p className="status-message">Loading Recipe...</p>
      </div>
    );
  }

  if (!info) {
    return (
      <div className="meal-info-page">
        <p className="status-message error">Recipe not found ❌</p>
      </div>
    );
  }

  return (
    <div className="meal-info-page">
      <div className="meal-info-card">
        <img
          src={info.strMealThumb}
          alt={info.strMeal}
          className="meal-image"
        />

        <div className="meal-content">
          <h1>{info.strMeal}</h1>

          <h3>Instructions</h3>
          <p>{info.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default MealInfo;
