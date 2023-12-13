import React from "react";

export default function CardBlog({ imgURL, date, title }) {
  return (
    <div className="group flex flex-col gap-8 mb-5 md:mb-8 cursor-pointer">
      <div className="rounded-xl overflow-hidden">
        <img
          src={imgURL}
          alt=""
          className="md:h-[18.50rem] md:w-[25rem] rounded-xl object-cover group-hover:scale-[110%] transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium line-clamp-2 group-hover:underline">
          {title}
        </h2>
        <div>
          <div className="inline-block px-8 py-2 font-extrabold rounded-lg text-center text-xs bg-menu text-black-2">
            {date}
          </div>
        </div>
      </div>
    </div>
  );
}
