"use client";

import { useState, useRef } from "react";
import { pipeline } from "@xenova/transformers";

export default function AIStudio() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Realistic");
  const [quality, setQuality] = useState("Fast");
  const [seed, setSeed] = useState(42);
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const pipeRef = useRef<any>(null);

  const styles: Record<string, string> = {
    Realistic: "ultra realistic, 4k, cinematic lighting",
    Anime: "anime style, vibrant colors, sharp lines",
    Cyberpunk: "cyberpunk theme, neon lights, futuristic city",
    Cartoon: "cartoon illustration, soft shading",
  };

  const enhancePrompt = (base: string) => {
    return `${base}, ${styles[style]}`;
  };

  const loadModel = async () => {
    if (!pipeRef.current) {
      pipeRef.current = await pipeline(
        "text-to-image",
        "Xenova/stable-diffusion-turbo",
        { device: "webgpu" }
      );
    }
    return pipeRef.current;
  };

  const generateImage = async () => {
    try {
      setLoading(true);
      setImage(null);

      const pipe = await loadModel();

      const enhanced = enhancePrompt(prompt);

      const steps = quality === "Fast" ? 2 : 4;

      const output = await pipe(enhanced, {
        num_inference_steps: steps,
        guidance_scale: 0.0,
        seed: seed,
      });

      const base64 = output[0].toBase64();
      setImage(base64);
    } catch (err) {
      console.error(err);
      alert("Use latest Chrome with WebGPU enabled.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 rounded-2xl p-6 shadow-xl space-y-6">

      {/* Prompt Input */}
      <textarea
        className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
        placeholder="Describe your image..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      {/* Controls */}
      <div className="grid md:grid-cols-3 gap-4">

        <select
          className="bg-gray-800 p-3 rounded-lg"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        >
          {Object.keys(styles).map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <select
          className="bg-gray-800 p-3 rounded-lg"
          value={quality}
          onChange={(e) => setQuality(e.target.value)}
        >
          <option>Fast</option>
          <option>High</option>
        </select>

        <input
          type="number"
          className="bg-gray-800 p-3 rounded-lg"
          value={seed}
          onChange={(e) => setSeed(Number(e.target.value))}
        />
      </div>

      {/* Generate Button */}
      <button
        onClick={generateImage}
        disabled={loading}
        className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {/* Output */}
      {image && (
        <div className="text-center space-y-4">
          <img
            src={image}
            alt="Generated"
            className="mx-auto rounded-xl shadow-lg max-w-md"
          />
          <a
            href={image}
            download="pdfzio-ai.png"
            className="inline-block bg-green-600 px-6 py-2 rounded-lg hover:bg-green-500"
          >
            Download
          </a>
        </div>
      )}
    </div>
  );
}
