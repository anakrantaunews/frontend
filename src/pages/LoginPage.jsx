import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg";

import Button from "../components/Button";
import InputWithLabel from "../components/InputWithLabel";
import axios from "axios";
import { config } from "../config";
import Cookies from "js-cookie";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${config.urlBackend}/api/auth/signin`,
        {
          email: form.email,
          password: form.password,
        }
      );
      Cookies.set("token", response.data.data);
      alert(response.data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.msg);
    }
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/");
    } else {
      return;
    }
  }, []);
  return (
    <section className="max-w-lg mx-auto">
      <div className="px-8 py-12">
        <div className="flex flex-col justify-center items-center gap-6">
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="logo"
            className=""
          />
          <p className="text-black-1 font-bold text-2xl lg:text-[1.75rem]">
            Login
          </p>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col gap-6 mt-10">
          <InputWithLabel
            label={"Email"}
            value={form.email}
            name={"email"}
            onChange={onChangeHandler}
            placeholder={"googlepixel42@gmail.com"}
            type={"text"}
            required
          />

          <InputWithLabel
            label={"Password"}
            placeholder={"********"}
            type={"password"}
            name={"password"}
            onChange={onChangeHandler}
            value={form.password}
            required
          />

          <Button type="submit" isPrimary className="mt-2">
            Login
          </Button>

          <div className="flex justify-center items-center">
            <p className="text-base text-gray-1 text-center">
              Belum punya akun?
              <Link
                to={"/register"}
                className="ml-1 text-primary hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
