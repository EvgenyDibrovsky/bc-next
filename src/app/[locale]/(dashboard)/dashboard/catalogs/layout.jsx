import Title from "../../../_components/Dashboard/TitlePageDashboard/TitlePageDashboard";
import { Link } from "../../../../../navigation";
import { TbHomeSearch } from "react-icons/tb";
import { RiUserSearchLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { FaRegMoneyBillAlt } from "react-icons/fa";

import { GoLaw } from "react-icons/go";
import { GrCatalog } from "react-icons/gr";

export default function CatalogsLayout({ children }) {
  return (
    <div>
      <Title title="Каталоги" />
      <div className="w-11/12 mx-auto">
        <div className="relative bg-neutral-100 p-[1.5rem] mt-[3rem]">
          <h2 className="mb-[1rem] font-semibold">Каталоги</h2>
          <div>
            <ul className="grid grid-cols-3 gap-[1.875rem]">
              <li className="flex items-center justify-center bg-white duration-300 hover:shadow-lg group">
                <Link href="/dashboard/catalogs/real-estate" className="w-full h-full flex justify-center items-center flex-col py-[1.5rem] px-[0.5rem] text-[1rem] text-sky-600 ">
                  <div className="flex items-center justify-center border-2 border-sky-600 p-3 rounded-full mb-4 duration-300 group-hover:scale-105">
                    <TbHomeSearch className="mx-auto w-[2rem] h-[2rem]" />
                  </div>
                  Агендства Недвижимости
                </Link>
              </li>
              <li className="flex items-center justify-center bg-white duration-300 hover:shadow-lg group">
                <Link href="/dashboard/catalogs/agency" className="w-full h-full flex justify-center items-center flex-col py-[1.5rem] px-[0.5rem] text-[1rem] text-sky-600 ">
                  <div className="flex items-center justify-center border-2 border-sky-600 p-3 rounded-full mb-4 duration-300 group-hover:scale-105">
                    <RiUserSearchLine className="mx-auto w-[2rem] h-[2rem]" />
                  </div>
                  Кадровое агентство
                </Link>
              </li>
              <li className="flex items-center justify-center bg-white duration-300 hover:shadow-lg group">
                <Link href="/dashboard/catalogs/bussines" className="w-full h-full flex justify-center items-center flex-col py-[1.5rem] px-[0.5rem] text-[1rem] text-sky-600 ">
                  <div className="flex items-center justify-center border-2 border-sky-600 p-3 rounded-full mb-4 duration-300 group-hover:scale-105">
                    <IoBriefcaseOutline className="mx-auto w-[2rem] h-[2rem]" />
                  </div>
                  Бизнес
                </Link>
              </li>
              <li className="flex items-center justify-center bg-white duration-300 hover:shadow-lg group">
                <Link href="/dashboard/catalogs/bussines" className="w-full h-full flex justify-center items-center flex-col py-[1.5rem] px-[0.5rem] text-[1rem] text-sky-600 ">
                  <div className="flex items-center justify-center border-2 border-sky-600 p-3 rounded-full mb-4 duration-300 group-hover:scale-105">
                    <FaRegMoneyBillAlt className="mx-auto w-[2rem] h-[2rem]" />
                  </div>
                  Финансы
                </Link>
              </li>
              <li className="flex items-center justify-center bg-white duration-300 hover:shadow-lg group">
                <Link href="/dashboard/catalogs/bussines" className="w-full h-full flex justify-center items-center flex-col py-[1.5rem] px-[0.5rem] text-[1rem] text-sky-600 ">
                  <div className="flex items-center justify-center border-2 border-sky-600 p-3 rounded-full mb-4 duration-300 group-hover:scale-105">
                    <GoLaw className="mx-auto w-[2rem] h-[2rem]" />
                  </div>
                  Право
                </Link>
              </li>
              <li className="flex items-center justify-center bg-white duration-300 hover:shadow-lg group">
                <Link href="/dashboard/catalogs/bussines" className="w-full h-full flex justify-center items-center flex-col py-[1.5rem] px-[0.5rem] text-[1rem] text-sky-600 ">
                  <div className="flex items-center justify-center border-2 border-sky-600 p-3 rounded-full mb-4 duration-300 group-hover:scale-105">
                    <PiStudentFill className="mx-auto w-[2rem] h-[2rem]" />
                  </div>
                  Образование
                </Link>
              </li>
            </ul>
          </div>

          <div>{children}</div>

          <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 rounded-full flex justify-center items-center p-[0.7rem] bg-sky-600 shadow-lg">
            <GrCatalog className="text-[2rem] text-white " />
          </div>
        </div>
      </div>
    </div>
  );
}
