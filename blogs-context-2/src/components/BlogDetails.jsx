import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="w-full h-full flex flex-col gap-y-4 justify-center items-center">
      <div className="flex flex-col gap-y-4">
        <NavLink to={`/blog/${post.id}`}>
          <span className="font-bold font-xs">{post.title}</span>
        </NavLink>

        <div className="-mt-3">
          <p className="text-[12px]">
            By <span className="italic">{post.author}</span> on{" "}
            <NavLink to={`catagories/${post.category.replaceAll(" ", "-")}`}>
              <span className="underline font-bold">{post.category}</span>
            </NavLink>
          </p>
          <p className="text-[12px]">Posten on {post.date}</p>
        </div>

        <p className="text-[14px]">{post.content}</p>

        <div className="flex gap-x-1 -mt-3">
          {post.tags.map((tag, index) => {
            return (
              <NavLink key={index} to={`tags/${tag.replaceAll(" ", "-")}`}>
                <span className="text-blue-500 font-bold underline text-xs">{` #${tag}`}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
