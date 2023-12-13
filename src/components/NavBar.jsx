import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Button from "./Button";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="px-8 py-6 md:py-8">
      <nav className="flex items-center justify-between">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-40 md:w-52" />
        </Link>
        <div className="hidden md:block">
          <div className="flex items-center gap-12">
            <Link to={"/search"} className="text-gray-1">
              Semua Berita
            </Link>
            <Link to={"/login"}>
              <Button isPrimary>Login</Button>
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <Bars2Icon className="h-8 w-8 text-black-1" onClick={handleOpen} />
        </div>
        <div
          className={`fixed top-0 right-0 w-full h-screen z-20 md:hidden ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } duration-500 transition-all`}
        >
          <div className="absolute top-0 right-0 w-full bg-white-1 px-8 pt-28 pb-14">
            <XMarkIcon
              className="absolute top-11 right-8 h-8 w-8 text-black-1"
              onClick={handleOpen}
            />
            <div className="flex flex-col gap-5">
              <Link to={"/search"} className="text-gray-1">
                Semua Berita
              </Link>
              <hr className="border w-full" />
              <Link to={"/login"}>
                <Button isPrimary>Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
