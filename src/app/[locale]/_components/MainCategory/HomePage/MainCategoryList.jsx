"use client";

import { BsBox } from "react-icons/bs";
import { Link } from "../../.././../../navigation";
import { MdArrowForwardIos } from "react-icons/md";

export default function Category() {
  return (
    <ul className="grid grid-cols-8 bg-white shadow-md">
      <li className="border-r duration-300 hover:bg-sky-600 group">
        <Link href="/work" className="flex justify-center items-center flex-col py-[2rem] px-[1rem] duration-300 group-hover:text-white">
          <BsBox className="mx-auto w-[2rem] h-[2rem] mb-4" />
          Работа
        </Link>
      </li>

      <li className="border-r duration-300 hover:bg-sky-600 group">
        <Link href="/real-estate" className="flex justify-center items-center flex-col py-[2rem] px-[1rem] duration-300 group-hover:text-white">
          <BsBox className="mx-auto w-[2rem] h-[2rem] mb-4" /> Недвижимость
        </Link>
      </li>

      <li className="border-r duration-300 hover:bg-sky-600 group">
        <Link href="/finance" className="flex justify-center items-center flex-col py-[2rem] px-[1rem] duration-300 group-hover:text-white">
          <BsBox className="mx-auto w-[2rem] h-[2rem] mb-4" /> Финансы
        </Link>
      </li>
      <li className="border-r duration-300 hover:bg-sky-600 group">
        <Link href="/law" className="flex justify-center items-center flex-col py-[2rem] px-[1rem] duration-300 group-hover:text-white">
          <BsBox className="mx-auto w-[2rem] h-[2rem] mb-4" /> Право
        </Link>
      </li>
      <li className="border-r duration-300 hover:bg-sky-600 group">
        <Link href="/bussines" className="flex justify-center items-center flex-col py-[2rem] px-[1rem] duration-300 group-hover:text-white">
          <BsBox className="mx-auto w-[2rem] h-[2rem] mb-4" /> Бизнес
        </Link>
      </li>
      <li className="border-r duration-300 hover:bg-sky-600 group">
        <Link href="/study" className="flex justify-center items-center flex-col py-[2rem] px-[1rem] duration-300 group-hover:text-white">
          <BsBox className="mx-auto w-[2rem] h-[2rem] mb-4" /> Образование
        </Link>
      </li>

      <li className="border-r duration-300 hover:bg-sky-600 group">
        <Link href="/blogs" className="flex justify-center items-center flex-col py-[2rem] px-[1rem] duration-300 group-hover:text-white">
          <BsBox className="mx-auto w-[2rem] h-[2rem] mb-4" /> Блоги
        </Link>
      </li>

      <li className="duration-300 hover:bg-sky-600 group">
        <Link href="/catalog" className="flex justify-center items-center flex-col py-[2rem] px-[1rem] duration-300 text-sky-600  group-hover:text-white">
          <MdArrowForwardIos className="mx-auto w-[2rem] h-[2rem] mb-4" /> Все категории
        </Link>
      </li>
    </ul>
  );
}
