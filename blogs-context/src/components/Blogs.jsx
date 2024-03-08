import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

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
            posts.map((post) => (
              <div key={post.id} className="flex flex-col gap-y-4">
                <p className="font-bold font-xs">{post.title}</p>

                <div className="-mt-3">
                  <p className="text-[12px]">
                    By <span className="italic">{post.author}</span> on{" "}
                    <span className="underline font-bold">{post.category}</span>
                  </p>
                  <p className="text-[12px]">Posten on {post.date}</p>
                </div>

                <p className="text-[14px]">{post.content}</p>

                <div className="flex gap-x-1 -mt-3">
                  {post.tags.map((tag, index) => {
                    return <span key={index} className="text-blue-500 font-bold underline text-xs">{` #${tag}`}</span>;
                  })}
                </div>
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
};

export default Blogs;
