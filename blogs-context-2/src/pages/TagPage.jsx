import React from "react";

// importing components
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

import { useLocation, useNavigate } from "react-router-dom";

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");

  return (
    <div className="w-full h-full flex flex-col gap-y-4 justify-center items-center mt-[70px] mb-[70px]">
      <Header />

      <div>
        <button onClick={() => navigation(-1)}>Back</button>
        <h2>
          Blogs Tagged <span>#{tag}</span>
        </h2>
      </div>

      <Blogs />
      <Pagination />
    </div>
  );
};

export default TagPage;
