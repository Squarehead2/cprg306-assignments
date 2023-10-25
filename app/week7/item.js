import React, { useState } from "react";

export default function Item({ item, handleClick }) {
  const [isSelected, setIsSelected] = useState(false);

  const defaultClassName = "bg-blue-300 w-full max-w-xs m-4 p-2";
  const selectedClassName = "bg-blue-500";

  const itemClassName = isSelected
    ? `${defaultClassName} ${selectedClassName}`
    : defaultClassName;

  const handleSelect = () => {
    setIsSelected(!isSelected);
  };

  const handleDoubleClick = () => {
    handleSelect();
    handleClick(item.name);
  };

  return (
    <div className={itemClassName} onClick={handleDoubleClick}>
      <h3 className="text-xl font-bold">{item.name}</h3>
      <p>quantity: {item.quantity}</p>
      <p>category: {item.category}</p>
    </div>
  );
}
