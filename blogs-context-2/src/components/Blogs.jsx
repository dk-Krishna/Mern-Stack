import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[630px] py-3 flex flex-col gap-y-7 mt-[66px] mb-[70px]">
      {loading ? (
        <Spinner />
      ) : (
        <>
          {posts.length === 0 ? (
            <div>
              <p>No Posts Found</p>
            </div>
          ) : (
            posts.map((post) => <BlogDetails key={post.id} post={post} />)
          )}
        </>
      )}
    </div>
  );
};

export default Blogs;
