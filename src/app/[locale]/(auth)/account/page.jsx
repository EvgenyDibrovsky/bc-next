"use client";

import { useState } from "react";
import Login from "../../_components/Auth/Login/Login";
import Register from "../../_components/Auth/Register/Register";

export default function Account() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <section className="relative h-[100dvh] flex items-center justify-center bg-hero bg-no-repeat bg-cover ">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <div className="container">
        <div className="relative z-210 w-6/12 mx-auto bg-black/50 p-[1rem]">
          <div className="flex">
            <button onClick={() => setActiveTab("login")} className={`w-full text-center duration-300 py-[0.5rem] ${activeTab === "login" ? "bg-black text-white" : "bg-neutral-600  text-white"}`}>
              Вход
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`w-full text-center duration-300 py-[0.5rem] ${activeTab === "register" ? "bg-black text-white" : "bg-neutral-600 text-white"}`}
            >
              Регистрация
            </button>
          </div>
          <div className="mt-5">
            {activeTab === "login" && <Login />}
            {activeTab === "register" && <Register />}
          </div>
        </div>
      </div>
    </section>
  );
}
