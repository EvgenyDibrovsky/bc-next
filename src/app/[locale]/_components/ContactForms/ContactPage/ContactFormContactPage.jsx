"use client";

import { handleSubmit } from "./actions";
import React from "react";

export default function ContactFormContactPage() {
  const formAction = React.useRef(handleSubmit).current;

  return (
    <form action={formAction} method="post" className="space-y-4">
      <div>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Имя и Фамилия"
          className="border border-neutral-200 focus:border-sky-600 py-[1rem] px-[1.5rem] w-full focus:outline-0"
          aria-label="Имя и Фамилия"
        />
      </div>
      <div>
        <input type="tel" id="phone" name="phone" placeholder="Телефон" className="border border-neutral-200 focus:border-sky-600 py-[1rem] px-[1.5rem] w-full focus:outline-0" aria-label="Телефон" />
      </div>
      <div>
        <input type="email" id="email" name="email" placeholder="Почта" className="border border-neutral-200 focus:border-sky-600 py-[1rem] px-[1.5rem] w-full focus:outline-0" aria-label="Почта" />
      </div>
      <div>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Тема сообщения"
          className="border border-neutral-200 focus:border-sky-600 py-[1rem] px-[1.5rem] w-full focus:outline-0"
          aria-label="Тема сообщения"
        />
      </div>
      <div>
        <textarea
          id="message"
          name="message"
          placeholder="Сообщение"
          className="border border-neutral-200 focus:border-sky-600 py-[1rem] px-[1.5rem] w-full focus:outline-0"
          aria-label="Сообщение"
        ></textarea>
      </div>
      <div>
        <button type="submit" className="w-4/12 h-[3rem] border border-sky-600 duration-300 bg-sky-600 hover:bg-white hover:text-sky-600 text-white text-[1.3rem]">
          Отправить
        </button>
      </div>
    </form>
  );
}
