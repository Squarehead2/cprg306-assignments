import { db } from "../_util/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const dbAddItem = async (userId, itemObj) => {
  try {
    let collectionRef = collection(db, "users", userId, "items");
    const addedItemPromise = await addDoc(collectionRef, itemObj);
    console.log("addedItemPromise", addedItemPromise.id);
    return docRef.id;
  } catch (error) {
    console.log(error);
  }
};

export async function dbGetItems(userId, updateItemList) {
  try {
    let collectionRef = collection(db, "users", userId, "items");
    const getItemsPromise = await getDocs(collectionRef);
    let dataList = [];
    getItemsPromise.forEach((doc) => {
      // items.push({ id: doc.id, ...doc.data() });
      console.log(doc.id, " => ", doc.data());

      let thisItem = { id: doc.id, ...doc.data() };
      dataList.push(thisItem);
    });
    updateItemList(dataList);
  } catch (error) {
    console.log(error);
  }
}
