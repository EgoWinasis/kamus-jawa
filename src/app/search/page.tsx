"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
import Results from "@/components/Results";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Wrap Results in Suspense to handle searchParams */}
      <main className="flex-grow">
        <Suspense fallback={<p>Loading results...</p>}>
          <Results />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
