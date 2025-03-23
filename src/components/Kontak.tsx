import React from "react";
import Image from "next/image"; 
import {
  GlobeAltIcon,
  AtSymbolIcon,
  MapPinIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";
import {
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-8">
        {/* Tentang Saya & Gambar */}
        <div className="grid grid-cols-2 gap-6 items-center">
          {/* Tentang Saya */}
          <div className="text-left">
            <h1 className="text-3xl font-bold text-gray-800">Tentang Saya</h1>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              Saya <span className="font-semibold">Ego Winasis</span>, seorang 
              <span className="font-semibold"> Fullstack Developer</span> dan 
              <span className="font-semibold"> IT Enthusiast</span> dengan pengalaman luas dalam pengembangan perangkat lunak. 
              Keahlian saya mencakup pengembangan aplikasi berbasis web, integrasi sistem, serta implementasi teknologi IoT. 
            </p>
          </div>
          {/* Gambar */}
          <Image
            src="/profile1.jpg"
            alt="Profile 1"
            width={400} // ✅ Add fixed width
            height={400} // ✅ Add fixed height
            className="w-full h-auto object-cover rounded-lg shadow"
          />
        </div>

        {/* Biodata & Gambar */}
        <div className="grid grid-cols-2 gap-6 items-center mt-8">
          {/* Gambar */}
          <Image
            src="/profile2.jpg"
            alt="Profile 2"
            width={400} // ✅ Add fixed width
            height={400} // ✅ Add fixed height
            className="w-full h-auto object-cover rounded-lg shadow"
          />
          {/* Biodata */}
          <div className="text-left">
            <h2 className="text-2xl font-semibold text-gray-800">Informasi Pribadi</h2>
            <ul className="mt-4 text-gray-700 text-lg space-y-3">
              <li className="flex items-center gap-3">
                <MapPinIcon className="h-6 w-6 text-gray-600" />
                Tegal, Indonesia
              </li>
              <li className="flex items-center gap-3">
                <AtSymbolIcon className="h-6 w-6 text-gray-600" />
                egowinasis12@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <BriefcaseIcon className="h-6 w-6 text-gray-600" />
                Fullstack Developer & IT Enthusiast
              </li>
            </ul>
          </div>
        </div>

        {/* Follow Me */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Follow Me</h2>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://porto-ego-vue.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-3xl hover:text-gray-900"
            >
              <GlobeAltIcon className="h-8 w-8" />
            </a>
            <a
              href="https://instagram.com/egowinasis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 text-3xl hover:text-pink-700"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com/egowinasis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-3xl hover:text-blue-700"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/egowinasis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-3xl hover:text-gray-900"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/ego-winasis-2178b2180"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-3xl hover:text-blue-800"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
