import React from "react";
import Spinner from "../components/Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="uppercase text-2xl underline font-bold mt-[15px]">
        A Random Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} width="450" alt="gif" />}

      <button
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg uppercase mb-[20px]"
        onClick={() => fetchData()}
      >
        Genreate
      </button>
    </div>
  );
};

export default Random;
