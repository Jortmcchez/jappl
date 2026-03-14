"use client";

import { useState } from "react";
import GameModal from "./GameModal";

type gameProp = {
  title: string;
  description?: string;
  imageSrc?: string;
};

export default function GameTile(props: gameProp) {
  const { title, description, imageSrc } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => (e.key === "Enter" ? setOpen(true) : null)}
        className="flex items-center justify-center w-full h-full bg-[#f02d29] rounded-2xl shadow-md hover:scale-105 transition cursor-pointer"
      >
        <p className="text-white text-xl font-semibold">{title}</p>
      </div>

      <GameModal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        description={description}
        imageSrc={imageSrc}
      />
    </>
  );
}
