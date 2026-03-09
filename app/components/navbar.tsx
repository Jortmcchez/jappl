"use client";
import mainLogo from "./pngs/Logo1.png";
import profileLogo from "./pngs/profile.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  return (
    <>
      <div className="flex w-full bg-[#689F38] h-15 justify-between items-center px-4 shadow-lg">
        <div
          onClick={() => router.push("/")}
          className="flex justify-center items-center w-10 h-10 cursor-pointer hover:scale-95"
        >
          <Image src={mainLogo} alt="Main Logo" />
        </div>

        <div
          onClick={() => router.push("/profile")}
          className="flex justify-center items-center w-10 h-10 cursor-pointer hover:scale-95"
        >
          <Image src={profileLogo} alt="Profile Logo" />
        </div>
      </div>
    </>
  );
}
