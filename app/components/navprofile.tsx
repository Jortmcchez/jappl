"use client";
import profileLogo from "./assets/profile.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavProfile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-center items-center w-10 h-10 cursor-pointer hover:scale-105 transition"
        aria-label="Profile"
      >
        <Image src={profileLogo} alt="Profile Logo" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg p-2 z-50">
          <Link
            href="/profile"
            className="block px-3 py-2 hover:bg-gray-100 rounded"
          >
            My Profile
          </Link>
          <Link
            href="/settings"
            className="block px-3 py-2 hover:bg-gray-100 rounded"
          >
            Settings
          </Link>
          <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
