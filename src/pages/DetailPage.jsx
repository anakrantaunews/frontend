import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DetailNews from "../components/DetailNews";
import { DATA_BLOG_NEW } from "../Data";
import CardBlog from "../components/CardBlog";

const DetailPage = () => {
  return (
    <main className="container-center">
      <NavBar />
      <DetailNews />

      <div className="md:py-[3.75rem] py-8 px-8">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-black-1 mb-8">
          Berita Lainnya
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA_BLOG_NEW.map((blog, index) => {
            return <CardBlog key={index} {...blog} />;
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default DetailPage;
