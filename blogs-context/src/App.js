import React, { useContext, useEffect } from "react";

// importing components
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import "./App.css";

const App = () => {
  const { fetchData } = useContext(AppContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-y-4 justify-center items-center">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
};

export default App;
