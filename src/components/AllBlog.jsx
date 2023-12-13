import React from "react";
import CardBlog from "./CardBlog";
import { DATA_BLOGS } from "../Data";

export default function AllBlog() {
  return (
    <section className="px-8 py-[3.75rem]">
      <h1 className="font-bold text-4xl text-black-1 mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DATA_BLOGS.map((blog, index) => {
          return <CardBlog key={index} {...blog} />;
        })}
      </div>
    </section>
  );
}