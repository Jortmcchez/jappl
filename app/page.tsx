"use client";
import Image from "next/image";
import HomePage from "./components/pngs/HomePage.png";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 text-center">
      <Image
        src={HomePage}
        alt="Main Logo"
        className="w-200 h-200 object-contain -mt-110"
      />

      <div className="flex gap-4 -mt-67">
        <div
          onClick={() => router.push("/games")}
          className="px-8 py-3 text-lg font-semibold text-[#e30402] bg-[#fff1bb] rounded-xl cursor-pointer hover:bg-[#e2d6a5] active:scale-95 transition"
        >
          Guest
        </div>

        <div
          onClick={() => router.push("/login")}
          className="px-8 py-3 text-lg font-semibold text-[#e30402] bg-[#fff1bb] rounded-xl cursor-pointer hover:bg-[#e2d6a5] active:scale-95 transition"
        >
          Login / Sign Up
        </div>
      </div>
    </div>
  );
}
