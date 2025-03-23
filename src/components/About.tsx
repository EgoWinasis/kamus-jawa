import React from "react";
import Image from "next/image"; 
const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Gambar Header */}
        <div className="relative">
         
        <Image
            src="/gambar.png"
            alt="About App"
            layout="responsive"
            width={800} // Adjust as needed
            height={600} // Adjust as needed
            className="w-full h-full object-cover"
            />
        
        </div>

        {/* Konten */}
        <div className="p-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            Aplikasi ini dirancang untuk membantu pengguna dalam mencari dan
            memahami istilah dalam bahasa Jawa dengan lebih mudah dan cepat. 
            Dengan fitur yang lengkap dan tampilan yang intuitif, aplikasi ini 
            menjadi alat yang berguna bagi siapa saja yang ingin memperdalam 
            pemahaman mereka tentang bahasa Jawa.
          </p>

          {/* Fitur Utama */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Fitur Utama</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✅ Pencarian istilah bahasa Jawa dengan cepat</li>
              <li>✅ Transkripsi fonetik untuk memudahkan pengucapan</li>
              <li>✅ Audio untuk mendengarkan pelafalan yang benar</li>
              <li>✅ Keterangan dari setiap kata</li>
            </ul>
          </div>

          {/* Tentang Developer */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Tentang Developer</h2>
            <p className="mt-3 text-gray-700">
              Aplikasi ini dikembangkan oleh <span className="font-semibold">Ego Winasis</span>, 
              seorang <span className="font-semibold">Fullstack Developer</span> dan <span className="font-semibold">IT Enthusiast</span>.  
              Dengan aplikasi ini, diharapkan pembelajaran bahasa Jawa semakin mudah diakses oleh semua kalangan.
            </p>
            <p className="mt-3 text-gray-700">
              Aplikasi ini menggunakan API dari <span className="font-semibold"> Kementerian Kebudayaan Republik Indonesia (Kemenbud RI) </span> 
              untuk memastikan data yang disajikan akurat dan terpercaya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
