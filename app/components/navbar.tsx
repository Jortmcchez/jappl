"use client";
import mainLogo from "./pngs/Logo1.png";
import profileLogo from "./pngs/profile.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  return (
    <>
      <div className="flex w-full bg-[#689F38] h-20 justify-between items-center px-4 shadow-lg">
        {/* Left group: logo, separator, Learn, separator, Games */}
        <div className="flex items-center">
          <button
            aria-label="Home"
            onClick={() => router.push("/")}
            className="flex items-center justify-center w-12 h-12 cursor-pointer hover:scale-105"
          >
            <Image src={mainLogo} alt="Main Logo" />
          </button>

          <div className="border-l border-gray-300 h-6 mx-3" />

          <button
            aria-label="Learn"
            onClick={() => router.push("/learn")}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-lg tracking-wide transition transform hover:scale-105 hover:bg-white/20 cursor-pointer"
          >
            Learn
          </button>

          <div className="border-l border-gray-300 h-6 mx-3" />

          <button
            aria-label="Games"
            onClick={() => router.push("/games")}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-lg tracking-wide transition transform hover:scale-105 hover:bg-white/20 cursor-pointer"
          >
            Games
          </button>
        </div>

        {/* Right: profile */}
        <div
          onClick={() => router.push("/profile")}
          className="flex justify-center items-center w-10 h-10 cursor-pointer hover:scale-90"
          role="button"
          aria-label="Profile"
        >
          <Image src={profileLogo} alt="Profile Logo" />
        </div>
      </div>
    </>
  );
}
