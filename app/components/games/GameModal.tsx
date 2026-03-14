"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  imageSrc?: string;
};

export default function GameModal({
  open,
  onClose,
  title,
  description = "No description yet.",
  imageSrc,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setVisible(true)),
      );
      return;
    }

    if (mounted) {
      setVisible(false);
      const t = setTimeout(() => setMounted(false), 220);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") handleClose();
    };
    if (mounted) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      setMounted(false);
      onClose();
    }, 220);
  };

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`absolute inset-0 transition-opacity ${visible ? "opacity-100" : "opacity-0"}`}
        onClick={handleClose}
        aria-hidden
        style={{ background: "rgba(0,0,0,0.18)", backdropFilter: "blur(4px)" }}
      />

      <div
        className={`relative bg-[#fff1bb] rounded-2xl shadow-xl max-w-5xl w-11/12 md:w-3/4 h-[80vh] overflow-hidden z-10 transform transition-all duration-200 ease-out ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-3 scale-95"
        }`}
      >
        <button
          aria-label="Close"
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 px-3 py-1 rounded hover:bg-gray-100"
        >
          ✕
        </button>

        <div className="flex h-full">
          <div className="w-1/2 bg-[#fff1bb] flex items-center justify-center">
            {imageSrc ? (
              <div className="relative h-full w-full">
                <Image
                  src={imageSrc}
                  alt={title}
                  style={{ objectFit: "cover" }}
                  fill
                />
              </div>
            ) : (
              <div className="h-64 w-64 bg-[#fff1bb] rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Image</span>
              </div>
            )}
          </div>

          <div className="w-1/2 p-8 overflow-auto">
            <h2 className="text-2xl text-[#e30402] font-bold mb-4">{title}</h2>
            <p className="text-gray-700 text-base">{description}</p>
            <div className="mt-6">
              <button
                onClick={() => console.log("Play", title)}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#e30402] text-white font-semibold rounded-lg hover:bg-[#c00302] transition"
                aria-label={`Play ${title}`}
              >
                Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
