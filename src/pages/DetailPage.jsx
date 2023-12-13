import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DetailNews from "../components/DetailNews";
import { DATA_BLOG_NEW } from "../Data";
import CardBlog from "../components/CardBlog";
import axios from "axios";
import { config } from "../config";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const [news, setNews] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${config.urlBackend}/api/posts`);
      const shuffledData = response.data.data.sort(() => Math.random() - 0.5);
      const randomThreeData = shuffledData.slice(0, 3);
      setNews(randomThreeData);
    };
    fetchData();
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login");
    } else {
      return;
    }
  }, []);
  return (
    <main className="container-center">
      <NavBar />
      <DetailNews />

      <div className="md:py-[3.75rem] py-8 px-8">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-black-1 mb-8">
          Berita Lainnya
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news &&
            news.map((blog, index) => {
              return <CardBlog key={index} {...blog} />;
            })}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default DetailPage;
