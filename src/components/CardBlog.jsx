import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardBlog({ thumbnailUrl, createdAt, name, _id }) {
  const navigate = useNavigate();
  const onClickHandle = () => {
    navigate(`/detail/${_id}`);
    window.location.reload();
  };
  return (
    <div
      onClick={onClickHandle}
      className="group flex flex-col gap-8 mb-5 md:mb-8 cursor-pointer"
    >
      <div className="rounded-xl overflow-hidden">
        <img
          src={thumbnailUrl}
          alt=""
          className="md:h-[18.50rem] md:w-[25rem] rounded-xl object-cover group-hover:scale-[110%] transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-6">
        <h2
          dangerouslySetInnerHTML={{ __html: name }}
          className="text-xl font-medium line-clamp-2 group-hover:underline"
        ></h2>
        <div>
          <div className="inline-block px-8 py-2 font-extrabold rounded-lg text-center text-xs bg-menu text-black-2">
            {moment(createdAt).format("ll")}
          </div>
        </div>
      </div>
    </div>
  );
}
