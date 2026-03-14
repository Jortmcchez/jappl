import mainLogo from "./assets/Logo1.png";
import Image from "next/image";
import Link from "next/link";
import NavProfile from "./navprofile"; // client component

export default function NavBar() {
  return (
    <div className="flex w-full bg-[#689F38] h-20 justify-between items-center px-4 shadow-lg">
      {/* Left group: logo + links */}
      <div className="flex items-center">
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center justify-center w-12 h-12 cursor-pointer hover:scale-105"
        >
          <Image src={mainLogo} alt="Main Logo" />
        </Link>

        <div className="border-l border-gray-300 h-6 mx-3" />

        <Link
          href="/learn"
          aria-label="Learn"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-lg tracking-wide transition transform hover:scale-105 hover:bg-white/20 cursor-pointer"
        >
          Learn
        </Link>

        <div className="border-l border-gray-300 h-6 mx-3" />

        <Link
          href="/games"
          aria-label="Games"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-lg tracking-wide transition transform hover:scale-105 hover:bg-white/20 cursor-pointer"
        >
          Games
        </Link>
      </div>

      {/* Right group: profile (client component) */}
      <NavProfile />
    </div>
  );
}
