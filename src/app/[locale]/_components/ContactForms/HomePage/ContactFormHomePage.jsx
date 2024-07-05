"use client";

import React from "react";
import { handleSubmit } from "./actions";

export default function ContactFormHomePage() {
  const formAction = React.useRef(handleSubmit).current;

  return (
    <form action={formAction} method="post" className="flex flex-col gap-4 bg-white">
      <input type="text" id="name" placeholder="Имя:" name="name" required className="border border-neutral-200 focus:border-sky-600 py-[1rem] px-[1.5rem] w-full focus:outline-0" aria-label="Имя" />

      <input
        type="email"
        id="email"
        placeholder="Email:"
        name="email"
        required
        className="border border-neutral-200 focus:border-sky-600 py-[1rem] px-[1.5rem] w-full focus:outline-0"
        aria-label="Email"
      />

      <input
        type="text"
        id="subject"
        placeholder="Тема сообщения:"
        name="subject"
        required
        className="border border-neutral-200 focus:border-sky-600 py-[1rem] px-[1.5rem] w-full focus:outline-0"
        aria-label="Тема сообщения"
      />

      <textarea
        id="message"
        placeholder="Текст сообщения:"
        name="message"
        required
        className="border border-neutral-200 focus:border-sky-600 py-[1rem] px-[1.5rem] w-full focus:outline-0"
        aria-label="Текст сообщения"
      ></textarea>

      <button type="submit" className="w-full h-[3rem] border border-sky-600 duration-300 bg-sky-600 hover:bg-white hover:text-sky-600 text-white text-[1.3rem]">
        Отправить
      </button>
    </form>
  );
}
