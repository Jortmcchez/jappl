"use client";

import React, { useState } from "react";

type Props = {
  addFruit: (name: string) => Promise<void> | void;
};

const AddFruitForm: React.FC<Props> = ({ addFruit }) => {
  const [fruitName, setFruitName] = useState<string>("");

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (fruitName.trim()) {
      addFruit(fruitName.trim());
      setFruitName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center">
      <input
        type="text"
        value={fruitName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFruitName(e.target.value)
        }
        placeholder="Enter fruit name"
        className="border px-2 py-1 rounded"
      />
      <button
        type="submit"
        className="px-3 py-1 bg-blue-600 text-white rounded"
      >
        Add Fruit
      </button>
    </form>
  );
};

export default AddFruitForm;
