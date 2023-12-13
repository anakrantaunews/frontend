import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

import Button from "../components/Button";
import InputWithLabel from "../components/InputWithLabel";

const RegisterPage = () => {
  return (
    <section className="max-w-lg mx-auto">
      <div className="px-8 py-12">
        <div className="flex flex-col justify-center items-center gap-6">
          <img src={logo} alt="logo" className="" />
          <p className="text-black-1 font-bold text-2xl lg:text-[1.75rem]">
            Register
          </p>
        </div>
        <form className="flex flex-col gap-6 mt-10">
          <InputWithLabel
            label={"Full Name"}
            placeholder={"Google Pixel"}
            type={"text"}
            name={"email"}
          />

          <InputWithLabel
            label={"Email"}
            placeholder={"googlepixel42@gmail.com"}
            type={"text"}
            name={"email"}
          />

          <InputWithLabel
            label={"Password"}
            placeholder={"********"}
            type={"password"}
            name={"password"}
          />

          <Button type="submit" isPrimary className="mt-2">
            Register
          </Button>

          <div className="flex justify-center items-center">
            <p className="text-base text-gray-1 text-center">
              Sudah punya akun?
              <Link to={"/login"} className="ml-1 text-primary hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
