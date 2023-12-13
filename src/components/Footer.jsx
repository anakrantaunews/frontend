import React from "react";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer>
      <div className="p-8">
        <div className="flex flex-col gap-6 md:flex-row items-start md:justify-between md:items-center">
          <img src={logo} alt="logo" className="w-40 md:w-52" />
          <p className="text-gray-1 text-base">
            Anak Rantau News, Hak Cipta 2023
          </p>
        </div>
      </div>
    </footer>
  );
}
