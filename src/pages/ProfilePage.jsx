import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import axios from "axios";
import { config } from "../config";
import Cookies from "js-cookie";
import ListBerita from "../components/ListBerita";
import { Link, useNavigate } from "react-router-dom";

function ProfilePage() {
  const [news, setNews] = useState();
  useEffect(() => {
    const fetchUserNews = async () => {
      const res = await axios.get(
        `${config.urlBackend}/api/posts/get-by-user`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      setNews(res.data.data);
    };
    fetchUserNews();
  }, []);

  const token = Cookies.get("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      return;
    }
  }, []);
  return (
    <main className="container-center">
      <NavBar />
      <section className="px-8">
        <div className="flex flex-col gap-5 md:flex-row w-full justify-between">
          <h2 className="font-bold text-2xl">Profile Page</h2>
          <div className="flex">
            <Link to={"/create"}>
              <Button isPrimary>Post Berita Baru</Button>
            </Link>
          </div>
        </div>
        <div className="my-12">
          <h2 className="font-medium text-xl">Berita yang pernah dibuat : </h2>
        </div>

        <ul className="flex flex-col gap-5 min-h-screen">
          {news ? (
            <>
              {news.length > 0 ? (
                news.map((item, idx) => (
                  <ListBerita
                    key={idx}
                    judul={item.name}
                    thumbnail={item.thumbnailUrl}
                    id={item._id}
                  />
                ))
              ) : (
                <p className="text-center">
                  Anda Belum Membuat Post Berita Apapun
                </p>
              )}
            </>
          ) : (
            <p className="text-center">Loading</p>
          )}
        </ul>
      </section>

      <Footer />
    </main>
  );
}

export default ProfilePage;
