"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useUserAuth } from "../_util/auth-context";
import { dbAddItem } from "../_services/shopping-list-service";
import { dbGetItems } from "../_services/shopping-list-service";
export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  let itemObj = {
    name: "apples",
    category: "produce",
    quantity: 3,
  };
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    if (user) {
      dbGetItems(user.uid, setItemList);
    }
  }, [user]);

  return (
    <main>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={() => dbAddItem(user.uid, itemObj)}>
            Add Test Item
          </button>
          {itemList.map((item) => (
            <>
              <div>{item.name}</div>
              <div>{item.category}</div>
              <div>{item.quantity}</div>
            </>
          ))}
        </div>
      ) : (
        <p>Please log in to view your shopping list.</p>
      )}
    </main>
  );
}
