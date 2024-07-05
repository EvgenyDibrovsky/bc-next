import Title from "../../../_components/Dashboard/TitlePageDashboard/TitlePageDashboard";

import { FaUser } from "react-icons/fa";
import { IoLockOpen } from "react-icons/io5";
import { TbExclamationMark } from "react-icons/tb";

import { CiEdit } from "react-icons/ci";

import Image from "next/image";

export default function SettingPage() {
  return (
    <div>
      <Title title="Страница настроек" />

      <div className="w-11/12 mx-auto">
        <div className="relative bg-neutral-100 p-[1.5rem] mt-[3rem]">
          <h2 className="mb-[1rem] font-semibold">Публичные данные</h2>
          <div className="flex gap-[1.875rem] ">
            <div className="w-fit">
              <div className="relative flex justify-center items-center border border-neutral-200 p-[2rem] w-[10rem] h-[10rem] overflow-hidden group">
                <Image src="/images/no-user-image.jpg" alt="Example Image" layout="fill" className="object-conraine duration-300 group-hover:scale-105 " />
                <button className="w-10/12 mx-auto absolute bottom-2 left-0 right-0 text-center translate-y-[2rem] bg-white shadow-md px-[0.1rem] py-[0.2rem] rounded-full duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  Сменить
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center items-start">
              <div className="w-6/12">
                <form action="" className="space-y-4">
                  <div className="flex items-center gap-[1rem]">
                    <input
                      className="border border-neutral-200 focus:border-sky-600 py-[0.6rem] px-[1rem] w-full focus:outline-0 placeholder:text-black"
                      type="text"
                      placeholder="Иван Иванов"
                      disabled
                    />
                    <button className="group">
                      <CiEdit className="text-[1rem] text-neutral-400 duration-300 group-hover:text-sky-600" />
                    </button>
                  </div>
                  <div className="flex items-center gap-[1rem]">
                    <input className="border border-neutral-200 focus:border-sky-600 py-[0.6rem] px-[1rem] w-full focus:outline-0 placeholder:text-black" type="tel" placeholder="+48 000 111 222" />
                    <button className="group">
                      <CiEdit className="text-[1rem] text-neutral-400 duration-300 group-hover:text-sky-600" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="w-6/12"></div>
            </div>
          </div>
          <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 rounded-full flex justify-center items-center p-[0.7rem] bg-sky-600 shadow-lg">
            <FaUser className="text-[2rem] text-white " />
          </div>
        </div>

        <div className="relative  bg-neutral-100 p-[1.5rem] mt-[3rem]">
          <div className="flex gap-[1.875rem] ">
            <div className="w-6/12">
              <h2 className="mb-[1rem] font-semibold">Сменить пароль</h2>

              <form action="" className="space-y-4">
                <input className="border border-neutral-200 focus:border-sky-600 py-[0.6rem] px-[1rem] w-full focus:outline-0" type="password" placeholder="Старый пароль" />
                <input className="border border-neutral-200 focus:border-sky-600 py-[0.6rem] px-[1rem] w-full focus:outline-0" type="tepasswordxt" placeholder="Новый пароль" />
                <input className="border border-neutral-200 focus:border-sky-600 py-[0.6rem] px-[1rem] w-full focus:outline-0" type="password" placeholder="Повторить пароль" />
                <button type="submit" className="w-4/12 h-[3rem] border border-sky-600 duration-300 hover:bg-sky-600 bg-white text-sky-600 hover:text-white text-[1.3rem]">
                  Сохранить
                </button>
              </form>
            </div>
            <div className="w-6/12">
              <h2 className="mb-[1rem] font-semibold">Сменить email</h2>

              <form action="" className="space-y-4">
                <input className="border border-neutral-200 focus:border-sky-600 py-[0.6rem] px-[1rem] w-full focus:outline-0" type="email" placeholder="Новый адрес email" />
                <button type="submit" className="w-4/12 h-[3rem] border border-sky-600 duration-300 hover:bg-sky-600 bg-white text-sky-600 hover:text-white text-[1.3rem]">
                  Сохранить
                </button>
              </form>
            </div>
          </div>

          <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 rounded-full flex justify-center items-center p-[0.7rem] bg-green-600 shadow-lg">
            <IoLockOpen className="text-[2rem] text-white " />
          </div>
        </div>

        <div className="relative bg-neutral-100 p-[1.5rem] mt-[3rem]">
          <h2 className="mb-[1rem] font-semibold">Удаление аккаунта</h2>
          <div className="flex gap-[1.875rem]">
            <form action="" className="space-y-4 w-7/12">
              <textarea
                id="message"
                name="message"
                placeholder="Пожалуйста укажите причину по которой вы хотите покинуть нас. "
                className="border bg-white h-[15rem] border-neutral-200 focus:border-sky-600 py-[0.6rem] px-[1rem] w-full focus:outline-0"
              ></textarea>
              <button type="submit" className="w-4/12 h-[3rem] border border-sky-600 duration-300 hover:bg-sky-600 bg-white text-sky-600 hover:text-white text-[1.3rem]">
                Отправить
              </button>
            </form>
            <div className="w-5/12">
              <div className="h-full flex flex-col justify-between items-center">
                <p>После нажатия на кнопку Удалить аккаунт все даные о вас на данном сайте будут удалены. Также будут удалены все ваши ваши блоги. </p>
                <button type="submit" className="w-full h-[3rem] border border-red-600 duration-300 hover:bg-red-600 bg-white hover:text-white text-red-600 text-[1.3rem]">
                  Удалить аккаунт
                </button>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 rounded-full flex justify-center items-center p-[0.7rem] bg-orange-600 shadow-lg">
            <TbExclamationMark className="text-[2rem] text-white " />
          </div>
        </div>
      </div>
    </div>
  );
}
