"use client";

import React, { useEffect, useState } from "react";
import api from "../api";
import AddFruitForm from "./addFruitForm";

type Fruit = {
  name: string;
};

const FruitList: React.FC = () => {
  const [fruits, setFruits] = useState<Fruit[]>([]);

  const fetchFruits = async () => {
    try {
      const response = await api.get("/fruits");
      // tolerant access in case backend shape differs
      setFruits(response.data?.fruits ?? []);
    } catch (error) {
      console.error("Error fetching fruits", error);
    }
  };

  const addFruit = async (fruitName: string) => {
    try {
      await api.post("/fruits", { name: fruitName });
      await fetchFruits(); // Refresh the list after adding a fruit
    } catch (error) {
      console.error("Error adding fruit", error);
    }
  };

  useEffect(() => {
    // call fetch in an async IIFE to avoid calling setState synchronously in the effect body
    (async () => {
      await fetchFruits();
    })();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Fruits List</h2>
      <ul className="mb-4">
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit.name}</li>
        ))}
      </ul>
      <AddFruitForm addFruit={addFruit} />
    </div>
  );
};

export default FruitList;
