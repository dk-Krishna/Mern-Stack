import React, { useContext, useEffect } from "react";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";

// importing components
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import CategoryPage from "./pages/CategoryPage";
import TagPage from "./pages/TagPage";

import { AppContext } from "./context/AppContext";
import "./App.css";

const App = () => {
  const { fetchData } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      // iska matlab tag wala page show krna hain
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchData(Number(page), tag);
    } else if (location.pathname.includes("catagories")) {
      // iska matlab cotagories wala page show krna hain
      const catagory = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchData(Number(page), catagory);
    } else {  
      fetchData(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tagId" element={<TagPage />} />
      <Route path="/catagories/:catagory" element={<CategoryPage />} />
    </Routes>
  );
};

export default App;
