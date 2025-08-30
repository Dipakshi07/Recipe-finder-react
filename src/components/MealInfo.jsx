import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-gray-600 animate-pulse">
          Loading Recipe...
        </p>
      </div>
    );
  }

  if (!info) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-red-500">
          Recipe not found ❌
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl w-full bg-yellow-300 rounded-2xl shadow-lg overflow-hidden">
        <img
          src={info.strMealThumb}
          alt={info.strMeal}
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            {info.strMeal}
          </h1>

          <h3 className="text-xl font-bold text-gray-700 mb-2">
            Instructions
          </h3>
          <p className="text-gray-800 leading-relaxed mb-6">
            {info.strInstructions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MealInfo;
