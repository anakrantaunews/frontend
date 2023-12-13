import React, { useEffect, useState } from "react";
import DetailNewsPhoto from "../assets/detailnews.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { config } from "../config";

export default function DetailNews() {
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${config.urlBackend}/api/posts/${id}`);
      setData(response.data.data);
    };
    fetchData();
  }, []);
  return (
    <section className="container-center">
      {data && (
        <div className="md:py-[3.75rem] py-8 px-8">
          <img
            className="h-44 md:h-[16rem] lg:h-[28rem] w-full object-cover rounded-xl"
            src={data.thumbnailUrl}
            alt=""
          />

          <div className="flex flex-col gap-8 mt-4">
            <div className="flex items-center justify-between">
              <p className="text-xs text-black-1">Dibaca {data.view} kali </p>

              <div className="inline-block px-8 py-2 font-extrabold rounded-lg text-center text-xs bg-menu text-black-2">
                {data.createdAt}
              </div>
            </div>

            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-black-1">
              {data.name}
            </h1>

            <div
              dangerouslySetInnerHTML={{ __html: data.description }}
              className="max-w-2xl mx-auto md:pt-[3.75rem]"
            ></div>
          </div>
        </div>
      )}
    </section>
  );
}
