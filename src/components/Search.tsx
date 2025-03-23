"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
import Image from "next/image";

export default function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {

    if (!query.trim()) {
        Swal.fire({
          icon: "warning",
          title: "Peringatan",
          text: "Masukkan kata kunci sebelum mencari!",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
        return;
      }

    if (!query.trim()) return;
    router.push(`/search?param=${encodeURIComponent(query)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-9 space-y-2">
      <Image
        src="/gambar.png"
        alt="Logo"
        width={100} // Set appropriate width
        height={100} // Set appropriate height
        className="w-100 h-auto"
        />
      <div className="flex items-center w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
        <input
          type="text"
          className="w-full p-3 text-gray-900 focus:outline-none"
          placeholder="Cari Istilah Jawa..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-4 py-3 bg-blue-500 text-white hover:bg-blue-600 transition cursor-pointer"
        >
          <MagnifyingGlassIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
