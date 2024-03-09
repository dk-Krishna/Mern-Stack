import React from "react";

// importing components
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

import { useLocation, useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1).replaceAll("-", " ");

  return (
    <div className="w-full h-full flex flex-col gap-y-4 justify-center items-center mt-[70px] mb-[70px]">
      <Header />

      <div>
        <h2>
          Blogs on <span>#{category}</span>
        </h2>
        <button onClick={() => navigation(-1)}>Back</button>
      </div>

      <Blogs />
      <Pagination />
    </div>
  );
};

export default CategoryPage;
