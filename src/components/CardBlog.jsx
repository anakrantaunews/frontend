import React from "react";

export default function CardBlog({ imgURL, date, title }) {
  return (
    <div className="flex flex-col gap-8 mb-5 md:mb-8">
      <img
        src={imgURL}
        alt=""
        className="md:h-[18.50rem] md:w-[25rem] rounded-xl object-cover"
      />
      <div className="flex flex-col gap-6">
        <h2 className="font-delaGothic text-lg md:text-xl lg:text-2xl">
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
