"use client";
import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика обработки отправки формы
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="shadow-md p-[1rem]">
      <form onSubmit={handleSubmit} className="form">
        <div className="mb-5">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
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
            className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="button-auth">
            Войти
          </button>
        </div>
      </form>
    </div>
  );
}
