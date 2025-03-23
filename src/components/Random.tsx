    "use client";

    import React, { useState, useEffect } from "react";
    import { useRouter } from "next/navigation";
    
    const API_BASE_URL = "https://senaraiistilahjawa.kemdikbud.go.id/api/v1";

    const Random = () => {
    const [randomWords, setRandomWords] = useState<unknown[]>([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const fetchRandomWords = async () => {
        setLoading(true);
        try {
        const response = await fetch(`${API_BASE_URL}/public/random/64`);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        if (Array.isArray(data)) {
            setRandomWords(data);
        }
        } catch (error) {
        console.error("Error fetching random words:", error);
        setRandomWords([]);
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        fetchRandomWords();
    }, []);


    const handleClick = (word: string) => {
        router.push(`/search?param=${encodeURIComponent(word)}`);
      };


    return (
        <div className="w-screen h-screen  flex flex-wrap items-center justify-center gap-4 p-6 overflow-hidden">
        {loading ? (
            <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        ) : (
            randomWords.map((word, index) => (
            <span
            key={index}
            onClick={() => handleClick(word)}
                className="bg-blue-500 text-white text-lg font-semibold px-4 py-2 cursor-pointer rounded-full shadow-md transition transform hover:scale-110"
            >
                {word}
            </span>
            ))
        )}
        </div>
    );
    };

    export default Random;
