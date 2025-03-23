"use client";

import Header from "@/components/Header";
import Results from "@/components/Results";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main content should grow to push the footer down */}
      <main className="flex-grow">
        <Results />
      </main>

      <Footer />
    </div>
  );
}
