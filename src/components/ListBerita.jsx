import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { config } from "../config";
import Cookies from "js-cookie";

function ListBerita(props) {

    const deletePostByUser = async () => {
        try {
            const response = await axios.delete(`${config.urlBackend}/api/posts/delete-by-user/${props.id}`, {headers : {
                Authorization : `Bearer ${Cookies.get("token")}`
            }})
            alert (response.data.message)
            window.location.reload()
        } catch (error) {
            alert("Gagal Menghapus Post")
        }
    } 
  return (
    <div className="border border-primary px-3 py-2 rounded-md flex md:flex-row flex-col w-full items-center gap-10">
      <div className="md:w-1/3 h-[100px] overflow-hidden object-cover">
        <img className="object-cover" src={props.thumbnail} alt="" srcset="" />
      </div>
      <div className="md:w-1/3">
        <p className="line-clamp-4">{props.judul}</p>
      </div>
      <div className="md:w-1/3 flex justify-end gap-5">
        <Link to={`/detail/${props.id}`}>
          <button>
            <EyeIcon className="w-6 md:w-8" />
          </button>
        </Link>
        <Link to={`/edit/${props.id}`}>
          <button>
            <PencilIcon className="w-6 md:w-8" />
          </button>
        </Link>
        <button onClick={deletePostByUser}>
          <TrashIcon className="w-6 md:w-8" />
        </button>
      </div>
    </div>
  );
}

export default ListBerita;
