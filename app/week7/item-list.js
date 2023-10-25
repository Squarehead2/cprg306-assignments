"use client";
import Item from "./item";
import NewItem from "./new-item";
import { useState } from "react";

var itemArray = [
  {
    id: "1h2GJKH12gkHG31h1H",
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  },
  {
    id: "2KJH3k2j3H1k2J3K1H",
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  },
  {
    id: "3h2KJH3k2j3H1k2J3",
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  },
  {
    id: "4k2J3K1H2GJKH12gk",
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  },
  {
    id: "5H1h1H2KJH3k2j3H",
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  },
  {
    id: "6H1k2J3K1H2GJKH1",
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  },
  {
    id: "7gkHG31h1H2KJH3k",
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  },
  {
    id: "8j3H1k2J3K1H2GJK",
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  },
  {
    id: "9H12gkHG31h1H2KJ",
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  },
  {
    id: "10H3k2j3H1k2J3K1",
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  },
  {
    id: "11k2J3K1H2GJKH12",
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  },
  {
    id: "12GJKH12gkHG31h1",
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  },
];

function onItemAdd(name, quantity, category) {
  itemArray.push({
    id: Date.now().toString(),
    name: name,
    quantity: quantity,
    category: category,
  });
}

export default function ItemList({ handleItemSelect }) {
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
      onItemAdd(name, quantity, category);
      setName("");
      setQuantity(1);
      setCategory("");
    } else {
      alert("Please enter a valid quantity between 1 and 99");
    }
  };

  const [sort, sortBy] = useState("name");
  const setSortBy = (event) => {
    sortBy(event.target.value);
  };

  if (sort === "name") {
    itemArray.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "category") {
    itemArray.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <>
      <div>
        {itemArray.map((item) => (
          <Item item={item} handleClick={handleItemSelect} />
        ))}

        <button
          onClick={setSortBy}
          value="name"
          className="active:text-white hover:bg-blue-400 bg-blue-200 w-full max-w-xs m-4 p-2"
        >
          Sort by name
        </button>
        <button
          onClick={setSortBy}
          value="category"
          className="active:text-white hover:bg-blue-400 bg-blue-200 w-full max-w-xs m-4 p-2"
        >
          Sort by category
        </button>
      </div>
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
    </>
  );
}
