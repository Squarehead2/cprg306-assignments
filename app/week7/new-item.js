"use client";

import Item from "./item";
import { useState } from "react";

export default function NewItem(itemArray) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (quantity < 99 && quantity > 0) {
      alert(
        "A item was submitted: " + name + "\n" + quantity + "\n" + category
      );
      setName("");
      setQuantity(1);
      setCategory("");
    } else {
      alert("Please enter a valid quantity between 1 and 99");
    }
  };

  itemArray.push({
    id: Date.now().toString(),
    name: name,
    quantity: quantity,
    category: category,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 border-gray-500 flex flex-col justify-center items-center"
    >
      <label className="flex flex-col justify-center items-center">
        Item name:
        <input
          type="text"
          placeholder="Enter your item name"
          className="border-2 border-gray-500 flex flex-col justify-center items-center text-center"
          value={name}
          onChange={handleChangeName}
        />
        <br />
        Item quantity:
        <input
          className="border-2 border-gray-500 flex flex-col justify-center items-center first-letter text-center"
          type="text"
          value={quantity}
          onChange={handleChangeQuantity}
        />
        <br />
        Item category:
        <select
          className="border-2 border-gray-500 flex flex-col justify-center items-center text-center"
          value={category}
          onChange={handleChangeCategory}
        >
          <option
            value=""
            disabled
            selected
            hidden
            className="border-2 border-gray-500 flex flex-col justify-center items-center text-center"
          >
            Select a category
          </option>
          <option
            value="Produce"
            className="border-2 border-gray-500 flex flex-col justify-center items-center text-center"
          >
            Produce
          </option>
          <option
            value="Dairy"
            className="border-2 border-gray-500 flex flex-col justify-center items-center text-center"
          >
            Dairy
          </option>
          <option
            value="Bakery"
            className="border-2 border-gray-500 flex flex-col justify-center items-center text-center"
          >
            Bakery
          </option>
          <option
            value="Meat"
            className="border-2 border-gray-500 flex flex-col justify-center items-center text-center"
          >
            Meat
          </option>
          <option
            value="Frozen Foods"
            className="border-2 border-gray-500 flex flex-col justify-center items-center text-center"
          >
            Frozen Foods
          </option>
          <option
            value="Canned Goods"
            className="border-2 border-gray-500 flex flex-col justify-center items-center text-center"
          >
            Canned Goods
          </option>
          <option
            value="Dry Goods"
            className="border-2 border-gray-500 flex flex-col justify-center items-center text-center"
          >
            Dry Goods
          </option>
          <option
            value="Beverages"
            className="border-2 border-gray-500 flex flex-col justify-center items-center text-center"
          >
            Beverages
          </option>
          <option
            value="Snacks"
            className="border-2 border-gray-500 flex flex-col justify-center items-center text-center"
          >
            Snacks
          </option>
          <option
            value="Household"
            className="border-2 border-gray-500 flex flex-col justify-center items-center text-center"
          >
            Household
          </option>
          <option
            value="Other"
            className="border-2 border-gray-500 flex flex-col justify-center items-center text-center"
          >
            Other
          </option>
        </select>
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
