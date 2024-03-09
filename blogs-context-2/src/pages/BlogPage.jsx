import React, { useContext, useEffect, useState } from "react";

// importing components
import Header from "../components/Header";
import Spinner from "../components/Spinner";

import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import BlogDetails from "../components/BlogDetails";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const navigation = useNavigate();
  const location = useLocation();
  const { loading, setLoading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at("-1");
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  const fetchRelatedBlogs = async () => {
    setLoading(true);

    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log("🚀 ~ fetchRelatedBlogs ~ data:", data);

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log(error);
      setBlog(null);
      setRelatedBlogs([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="w-11/12 max-w-[630px] py-3 flex flex-col gap-y-7 mt-[66px] mb-[70px]">
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
      </div>

      {loading ? (
        <Spinner />
      ) : blog ? (
        <div>
          <BlogDetails post={blog} />
          <h2>Related Blogs</h2>
          {relatedBlogs.map((post) => (
            <div key={post.id}>
              <BlogDetails key={post.id} post={post} />
            </div>
          ))}
        </div>
      ) : (
        <p>No Blog Found</p>
      )}
    </div>
  );
};

export default BlogPage;
