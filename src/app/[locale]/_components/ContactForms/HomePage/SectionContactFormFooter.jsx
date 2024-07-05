"use client";

import React from "react";
import { handleSubmit } from "./actions";
import AccordionFooter from "../../Accordion/HomePage/AccordionFooter";
import ContactFormHomePage from "./ContactFormHomePage";
export default function ContactFormFooter() {
  const formAction = React.useRef(handleSubmit).current;

  return (
    <section className="py-[4rem] bg-neutral-100">
      <div className="container">
        <div className="flex gap-[2rem]">
          <div className="w-8/12">
            <AccordionFooter />
          </div>
          <div className="relative z-10 w-4/12 -mb-[10rem] border bg-white border-sky-600 p-5 flex flex-col justify-around">
            <h3 className="text-center text-black font-medium text-[1.4rem] mb-2">Обратная связь</h3>
            <ContactFormHomePage />
          </div>
        </div>
      </div>
    </section>
  );
}
