import Header from "@/components/Header";
import Search from "@/components/Search";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main content should grow to push the footer down */}
      <main className="flex-grow">
        <Search />
      </main>

      <Footer />
    </div>
  );
}
