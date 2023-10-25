"use client";

import ItemList from "./item-list";
import React, { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [ingredient, setIngredient] = useState("");

  const handleItemSelect = (selectedIngredient) => {
    setIngredient(selectedIngredient);
  };

  const stripEmojis = (str) =>
    str
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .replace(/\s+/g, " ")
      .trim();

  const removeAfterComma = function (string) {
    // Split the input string by a comma
    const parts = string.split(",");

    // Take the first part of the array (before the comma)
    const result = parts[0];

    return result;
  };

  return (
    <main>
      <h1 className="text-4xl font-bold m-6 text-center text-orange-500">
        Groccery list
      </h1>
      <ItemList handleItemSelect={handleItemSelect} />
      <MealIdeas ingredient={removeAfterComma(stripEmojis(ingredient))} />
    </main>
  );
}
