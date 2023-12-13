import React from "react";
import { DATA_BLOGS } from "../Data";
import CardBlog from "../components/CardBlog";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchPage = () => {
  return (
    <main className="container-center">
      <NavBar />

      <section className="px-8 md:py-[3.75rem] py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-black-1 mb-8">
            Semua Berita
          </h1>

          <div className="group flex items-center justify-center rounded-lg py-1 px-4 mb-8 gap-2 bg-gray-100">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-1 group-hover:scale-[110%]" />
            <input
              type="text"
              placeholder="search..."
              className="p-2 focus:outline-none bg-gray-100"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA_BLOGS.map((blog, index) => {
            return <CardBlog key={index} {...blog} />;
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SearchPage;
