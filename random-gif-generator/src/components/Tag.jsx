import React, { useState } from "react";
import Spinner from "../components/Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("car");

  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="w-1/2 mb-[45px] bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="uppercase text-2xl underline font-bold mt-[15px]">
        Random {tag} Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} width="450" alt="gif" />}

      <input
        type="text"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        className="w-10/12 text-lg p-2 rounded-lg mb-[2px] text-center  focus:outline-none"
        placeholder="panda"
      />

      <button
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg uppercase mb-[20px]"
        onClick={() => fetchData(tag)}
      >
        Genreate
      </button>
    </div>
  );
};

export default Tag;
