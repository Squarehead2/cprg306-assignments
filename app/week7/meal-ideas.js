"use client";

import React, { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  //create async function for recipes

  const getRecipes = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    setMeals(data.meals);
  };

  useEffect(() => {
    getRecipes();
  }, [ingredient]);

  if (meals === null) {
    console.log(ingredient);
    return (
      <div>
        <h1>Meal Ideas</h1>

        <p>Searching for meals with {ingredient}</p>
        <p>No meals found</p>
      </div>
    );
  } else
    return (
      <div>
        <h1>Meal Ideas</h1>
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      </div>
    );
}
