"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const API_BASE_URL = "https://senaraiistilahjawa.kemdikbud.go.id/api/v1";

interface Term {
  name: string;
  slug: string;
  description: string;
}

interface ApiResponse {
  terms: {
    data: Term[];
  };
  meta: {
    current_page: number;
    last_page: number;
  };
}


export default function Results() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const param1 = searchParams.get("param1") || "terms"; // Default to "terms"
  const param2 = searchParams.get("param") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);


  const [relatedTerms, setRelatedTerms] = useState<Term[]>([]);
  const [dataSame, setDataSame] = useState<Term[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [detailData, setDetailData] = useState<unknown>(null);


  
  useEffect(() => {
    if (!param2) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_BASE_URL}/public/search/${param1}/${param2}?page=${page}`);
        if (!response.ok) throw new Error("Gagal mengambil data");
        const result: ApiResponse = await response.json();


    

        const related = result.terms.data.filter(item => item.name.toLowerCase() !== param2.toLowerCase());
        const dataSame = result.terms.data.filter(item => item.name.toLowerCase() == param2.toLowerCase());
     
        
        setRelatedTerms(related);
        setDataSame(dataSame);
        if (dataSame.length > 0) {
              handleGetDetail(dataSame[0].slug);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Terjadi kesalahan saat mengambil data.");
        }
      }
       finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [param1, param2, page]);


  const handleGetDetail = async (param: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/public/detail/${param}`);
        const data = await response.json();
        
       
        
        if (data && typeof data === "object") {
            setDetailData(data);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        Swal.fire({
            icon: "error",
            title: "Kesalahan",
            text: "Terjadi kesalahan saat mengambil data!",
        });
    }
};


  

  const handleRelatedSearch = (term: string) => {
    if (!term.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Peringatan",
        text: "Masukkan kata kunci sebelum mencari!",
      });
      return;
    }
  
    // Reset data sebelum pencarian
   
    setRelatedTerms([]);
    setDataSame([]);
    setLoading(true);
  
    // Beri delay sebelum melakukan pencarian
    setTimeout(() => {
      router.push(`/search?param=${term}`);
    }, 300); // Delay 300ms
  };
  
  const handleSearch = () => {

    if (!searchTerm.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Peringatan",
        text: "Masukkan kata kunci sebelum mencari!",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
      return;
    }

    // Reset states before searching
 
    setRelatedTerms([]);
    setDataSame([]);
    setLoading(false);
    setSearchTerm("");
  
    // Navigate to the new search query
    router.push(`/search?param=${searchTerm}`);
  };
  
  


  return (
    <div className="p-6">

       {/* Search Input */}
<div className="flex justify-center mt-4 mb-6">
  <div className="w-full max-w-lg flex">
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Masukkan kata kunci..."
      className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      onClick={handleSearch}
      className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition cursor-pointer"
    >
      Cari
    </button>
  </div>
</div>



      <h1 className="text-xl font-bold text-center">Hasil Pencarian: {param2}</h1>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center my-6">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error Message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Tampilkan hasil pencarian utama */}
      {dataSame.length > 0 ? (
  <div className="mt-6 space-y-6">
    {dataSame.map((item, index) => (
      <div 
        key={index} 
        className="w-full max-w-3xl mx-auto p-6 rounded-2xl shadow-md bg-white transition hover:shadow-lg"
      >
        {/* Kata (Title) */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {item.name || "Tidak ada kata"}
          {detailData && detailData.name === item.name && (
            <span className="text-gray-600 text-lg font-light ml-2 italic" 
                  style={{ fontFamily: '"Noto Sans IPA", "Doulos SIL", "Charis SIL", sans-serif' }}>
              [ {detailData.phonetic_transcription || "Tidak ada tipe"} ]
            </span>
          )}
        </h2>


        {/* Content */}
        <div className="mt-4 space-y-3">
          {/* Keterangan */}
          <div className="flex gap-2">
            <span className="font-semibold text-gray-700 min-w-[120px]">Keterangan</span>
            <p 
              className="text-gray-600 flex-1"
              dangerouslySetInnerHTML={{ __html: item.description || "Tidak ada keterangan" }} 
            />
          </div>

          {/* Tipe */}
          {detailData && detailData.name === item.name && (
            <div className="flex gap-2">
              <span className="font-semibold text-gray-700 min-w-[120px]">Tipe</span>
              <p className="text-gray-600 flex-1 italic">
                  {detailData.types && detailData.types.length > 0
                    ? detailData.types.join(", ") // Join array items with commas
                    : "Tidak ada tipe"}
              </p>

            </div>
          )}

          {/* Audio */}
          {detailData && detailData.name === item.name && detailData.audio && (
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-gray-700 min-w-[120px]">Audio</span>
              {detailData.audio ? (
                <audio controls className="mt-2 w-full">
                  <source 
                    src={`https://senaraiistilahjawa.kemdikbud.go.id/storage/audio/${detailData.audio}`} 
                    type="audio/mpeg" 
                  />
                  Your browser does not support the audio element.
                </audio>
              ) : (
                <p className="text-gray-600">Tidak ada audio</p>
              )}


            </div>
          )}
        </div>
      </div>
    ))}
  </div>
) : (
  !loading && <p className="text-center text-gray-500 mt-4">Tidak ada hasil ditemukan.</p>
)}





      {/* Kata Terkait */}
      {dataSame.length > 0 && relatedTerms.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg font-bold text-center">Kata Terkait:</h2>
          <div className="mt-5 flex flex-wrap gap-2 justify-center">
          {relatedTerms.map((item, index) => (
                <span 
                  key={index} 
                  onClick={() => handleRelatedSearch(item.name)}
                  className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full shadow-md cursor-pointer hover:bg-blue-600 transition"
                >
                  {item.name}
                </span>
              ))}

          </div>
        </div>
      )}

      


    </div>
  );
}
