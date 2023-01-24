import { initializeApp } from "firebase/app";
import {
  getDatabase,
  get,
  ref,
  child,
  update,
  remove,
  push,
} from "firebase/database";

const firebaseConfig = {
  databaseURL: "https://my-card-application-default-rtdb.europe-west1.firebasedatabase.app/",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(database);

export const db = {
  deleteItem: (id) => {
    const itemRef = ref(database, `items/${id}`);
    remove(itemRef);
  },

  loadItems: async () => {
    const snapshot = await get(child(dbRef, `items`));
    const items = [];

    if (snapshot.exists()) {
      const data = snapshot.val();

      for (const item of Object.values(data)) {
        items.push(item);
      }
    } else {
      console.log("No data available");
    }
    return items;
  },
  loadCats: async () => {
    const snapshot = await get(child(dbRef, `categories`));
    const categories = [];

    if (snapshot.exists()) {
      const data = snapshot.val();

      for (const item of Object.values(data)) {
        categories.push(item);
      }
    } else {
      console.log("No data available");
    }
    return categories;
  },

  addItem: (product) => {
    const key = push(child(dbRef, "items")).key;
    const newItem = { id: key, ...product };
    const updates = {};

    updates[`items/${key}`] = newItem;
    update(dbRef, updates);

    return newItem;
  },

  modifyItem: (id, data) => {
    const updates = {};

    updates[`items/${id}`] = data;
    update(dbRef, updates);
  },
};