import React, { useEffect, useState } from "react";
import CardBlog from "./CardBlog";
import { DATA_BLOGS } from "../Data";
import { config } from "../config";
import axios from "axios";

export default function AllBlog() {
  const [news, setNews] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${config.urlBackend}/api/posts`);
      const shuffledData = response.data.data.sort(() => Math.random() - 0.5);
      const randomSixData = shuffledData.slice(0, 6);
      setNews(randomSixData);
    };
    fetchData();
  }, []);
  return (
    <section className="px-8 md:py-[3.75rem] py-8">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-black-1 mb-8">
        Berita
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news &&
          news.map((blog, index) => {
            return <CardBlog key={index} {...blog} />;
          })}
      </div>
    </section>
  );
}
