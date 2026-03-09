"use client";
import NavBar from "../components/navbar";
import GameBackdrop from "./gameBackdrop";

export default function Game() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <GameBackdrop />
      </div>
    </>
  );
}
