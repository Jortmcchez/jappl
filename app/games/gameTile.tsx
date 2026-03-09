"use client";

type gameProp = {
  title: string;
};

export default function GameTile(props: gameProp) {
  return (
    <div className="flex items-center justify-center w-full h-full bg-amber-600 rounded-xl shadow-md hover:scale-105 transition cursor-pointer">
      <p className="text-white text-xl font-semibold">{props.title}</p>
    </div>
  );
}
