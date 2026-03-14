import Image from "next/image";
import HomePage from "./components/assets/HomePage.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 text-center">
      <Image
        src={HomePage}
        alt="Main Logo"
        className="w-200 h-200 object-contain -mt-110"
      />

      <div className="flex gap-4 -mt-67">
        <Link
          href="/games"
          className="px-8 py-3 text-lg font-semibold text-[#e30402] bg-[#fff1bb] rounded-xl cursor-pointer hover:bg-[#e2d6a5] active:scale-95 transition"
        >
          Guest
        </Link>

        <Link
          href="/login"
          className="px-8 py-3 text-lg font-semibold text-[#e30402] bg-[#fff1bb] rounded-xl cursor-pointer hover:bg-[#e2d6a5] active:scale-95 transition"
        >
          Login / Sign Up
        </Link>
      </div>
    </div>
  );
}
