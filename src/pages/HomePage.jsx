import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Recent from "../components/Recent";
import AllBlog from "../components/AllBlog";

const HomePage = () => {
  return (
    <main className="container-center">
      <NavBar />
      <Recent />
      <AllBlog />
      <Footer />
    </main>
  );
};

export default HomePage;
