"use client";

import type { ReactElement } from "react";
import AIStudio from "./components/AIStudio";

export default function Page(): ReactElement {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center">
          PDFZIO AI Studio
        </h1>

        <p className="text-center text-gray-400 mb-10">
          Lightweight Client-Side AI Image Generator
        </p>

        <AIStudio />
      </div>
    </div>
  );
}
