import React from "react";
import { DATA_RECENTS, DATA_RECENT_NEWS } from "../Data";

export default function Recent() {
  return (
    <section className="px-8 md:py-[3.75rem] py-8">
      <div>
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-black-1 mb-8">
          Terbaru
        </h1>
        {DATA_RECENTS.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 lg:gap-24 items-center mb-10"
          >
            <img
              src={item.imgURL}
              alt="img recent"
              className="rounded-xl w-full md:w-1/2 object-contain"
            />
            <div className="flex flex-col gap-3 md:gap-6">
              <div>
                <div className="inline-block px-8 py-2 font-extrabold rounded-lg text-center text-xs bg-menu text-black-2">
                  {item.date}
                </div>
              </div>
              <h2 className="text-black-1 text-2xl lg:text-4xl font-bold">
                {item.title}
              </h2>
              <p className="text-base text-gray-1">{item.description}</p>
            </div>
          </div>
        ))}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-11">
          {DATA_RECENT_NEWS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-3 md:gap-14 lg:gap-10 items-center"
            >
              <div className="flex flex-col gap-3 md:gap-6">
                <div>
                  <div className="inline-block px-8 py-2 font-extrabold rounded-lg text-center text-xs bg-menu text-black-2">
                    {item.date}
                  </div>
                </div>
                <h2 className="text-black-1 text-2xl font-bold">
                  {item.title}
                </h2>
              </div>
              <img
                src={item.imgURL}
                alt="img recent"
                className="rounded-xl w-full md:w-72 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
