import Header from "@/components/Header";
import Kontak from "@/components/Kontak";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main content should grow to push the footer down */}
      <main className="flex-grow">
        <Kontak />
      </main>

      <Footer />
    </div>
  );
}
