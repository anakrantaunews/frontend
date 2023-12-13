import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Recent from "../components/Recent";
import AllBlog from "../components/AllBlog";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const HomePage = () => {
  return (
    <main className="container-center">
      <NavBar />
      <Recent />
      <AllBlog />
      {Cookies.get("token") ? (
        ""
      ) : (
        <section className="px-8 py-8 md:py-[3.75rem]">
          <div className="lg:px-24 px-8 md:px-20 md:py-10s py-8 lg:py-16 bg-black-1 rounded-2xl">
            <div className="flex flex-col lg:flex-row gap-5 justify-center items-center lg:justify-between lg:items-end">
              <h2 className="text-white-2 lg:w-1/2 text-xl md:text-2xl lg:text-3xl text-center lg:text-start font-medium md:font-bold md:leading-[2.5rem] lg:leading-[3rem]">
                Jadilah yang pertama, dapatkan info terbaru dari kami
              </h2>
              <Link to={"/register"}>
                <Button isPrimary>Daftar Sekarang!</Button>
              </Link>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
};

export default HomePage;
