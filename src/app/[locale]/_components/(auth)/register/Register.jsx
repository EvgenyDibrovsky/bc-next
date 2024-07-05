"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Titles from "../../PageSettings/TitlePage/Titles";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await fetch("users/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await result.json();
      if (data.error) {
        alert(data.message);
      } else {
        await signIn("credentials", { username, password });
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <section className="min-h-[calc(100dvh-14rem)] py-[2.5rem]">
      <div className="container">
        <Titles title="Регистрация" subTitle="Подзаголовок" />
        <div className="flex items-center justify-center ">
          <div className="w-4/12 mx-auto">
            <form onSubmit={handleSubmit} className="form ">
              <div className="mb-5">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full h-10 bg-white dark:bg-black  border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-10 bg-white dark:bg-black  border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full h-10 bg-white dark:bg-black  border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
                />
              </div>
              <button type="submit" className=" dark:text-white my-4 mx-auto block transition-all duration-200 hover:underline">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
