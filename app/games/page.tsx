"use client";
import NavBar from "../components/navbar";
import GameTile from "./gametiles";

export default function Game() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <GameTile />
      </div>
    </>
  );
}
