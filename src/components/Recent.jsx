import React, { useEffect, useState } from "react";
import { DATA_RECENTS, DATA_RECENT_NEWS } from "../Data";
import axios from "axios";
import { config } from "../config";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function Recent() {
  const [recentNews, setRecentNews] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${config.urlBackend}/api/posts`);
      setRecentNews(response.data.data.slice(0, 3));
    };
    fetchData();
  }, []);
  return (
    <section className="px-8 md:py-[3.75rem] py-8">
      <div>
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-black-1 mb-8">
          Terbaru
        </h1>
        {recentNews && (
          <div
            onClick={() => navigate(`/detail/${recentNews[0]._id}`)}
            className="group flex flex-col md:flex-row gap-8 lg:gap-24 items-center mb-10 cursor-pointer"
          >
            <img
              src={recentNews[0].thumbnailUrl}
              alt="img recent"
              className="rounded-xl w-full md:w-1/2 object-contain"
            />
            <div className="flex flex-col gap-3 md:gap-6">
              <div>
                <div className="inline-block px-8 py-2 font-extrabold rounded-lg text-center text-xs bg-menu text-black-2">
                  {moment(recentNews[0].createdAt).format("ll")}
                </div>
              </div>
              <h2 className="text-black-1 text-2xl lg:text-4xl font-bold group-hover:underline line-clamp-4">
                {recentNews[0].name}
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: recentNews[0].description }}
                className="text-base text-gray-1 line-clamp-4"
              ></p>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-11">
          {recentNews &&
            recentNews.map((item, index) => {
              if (index == 0) {
                return;
              } else {
                return (
                  <div
                    onClick={() => navigate(`/detail/${item._id}`)}
                    key={index}
                    className="group flex flex-col md:flex-row gap-3 md:gap-14 lg:gap-10 items-center cursor-pointer"
                  >
                    <div className="flex flex-col gap-3 md:gap-6">
                      <div>
                        <div className="inline-block px-8 py-2 font-extrabold rounded-lg text-center text-xs bg-menu text-black-2">
                          {moment(item.createdAt).format("ll")}
                        </div>
                      </div>
                      <h2 className="text-black-1 text-2xl font-bold group-hover:underline line-clamp-3">
                        {item.name}
                      </h2>
                    </div>
                    <img
                      src={item.thumbnailUrl}
                      alt="img recent"
                      className="rounded-xl w-full md:w-72 object-contain"
                    />
                  </div>
                );
              }
            })}
        </div>
      </div>
    </section>
  );
}
