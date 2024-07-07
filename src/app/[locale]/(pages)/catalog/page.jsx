import { Link } from "../../../../navigation";
import Image from "next/image";
import profilePic from "../../../../../public/images/no-image.jpg";
import { PiHeartStraightDuotone } from "react-icons/pi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  const trimmedText = text.substr(0, maxLength);
  return trimmedText.substr(0, Math.min(trimmedText.length, trimmedText.lastIndexOf(" "))) + "...";
}

export default function Catalog() {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque animi commodi fugit deleniti. Officia dicta, sunt at quae mollitia amet necessitatibus. Sapiente dolorum facere, delectus amet porro fugit repellendus vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque animi commodi fugit deleniti. Officia dicta, sunt at quae mollitia amet necessitatibus. Sapiente dolorum facere, delectus amet porro fugit repellendus vitae.";
  const truncatedDescription = truncateText(description, 225);

  return (
    <div>
      <ul className="grid grid-cols-1 gap-[1rem]">
        <li className="bg-orange-50 border border-neutral-200 duration-300 hover:shadow-md">
          <Link href="#" className="flex gap-[1rem] p-[1rem]">
            <Image src={profilePic} alt="Picture of the author" className="border border-neutral-200 w-[10rem] h-[10rem] aspect-[4/3] object-cover" />

            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-[1.4rem] font-semibold text-sky-600">Gotowy biznes wraz z nieruchomością</h2>
                <p className="text-[1rem]">{truncatedDescription}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[0.8rem] text-neutral-400">10.02.2024</span>
                  <span className="text-[1rem] pb-[0.1rem] text-neutral-400">|</span>
                  <span className="text-[0.8rem] text-neutral-400">Польша, Краков</span>
                  <span className="text-[1rem] pb-[0.1rem] text-neutral-400">|</span>
                  <span className="text-[0.8rem] text-neutral-400">Firma Sp.z o.o.</span>
                </div>
                <PiHeartStraightDuotone className="text-[1.5rem] text-neutral-400 duration-300 hover:text-red-700" />
              </div>
            </div>
          </Link>
        </li>
        <li className="bg-red-50 border border-neutral-200 duration-300 hover:shadow-md">
          <Link href="#" className="flex gap-[1rem] p-[1rem]">
            <Image src={profilePic} alt="Picture of the author" className="border border-neutral-200 w-[10rem] h-[10rem] aspect-[4/3] object-cover" />

            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-[1.4rem] font-semibold text-sky-600">Gotowy biznes wraz z nieruchomością</h2>
                <p className="text-[1rem]">{truncatedDescription}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[0.8rem] text-neutral-400">10.02.2024</span>
                  <span className="text-[1rem] pb-[0.1rem] text-neutral-400">|</span>
                  <span className="text-[0.8rem] text-neutral-400">Польша, Краков</span>
                  <span className="text-[1rem] pb-[0.1rem] text-neutral-400">|</span>
                  <span className="text-[0.8rem] text-neutral-400">Firma Sp.z o.o.</span>
                </div>
                <PiHeartStraightDuotone className="text-[1.5rem] text-neutral-400 duration-300 hover:text-red-700" />
              </div>
            </div>
          </Link>
        </li>
        <li className="bg-green-50 border border-neutral-200 duration-300 hover:shadow-md">
          <Link href="#" className="flex gap-[1rem] p-[1rem]">
            <Image src={profilePic} alt="Picture of the author" className="border border-neutral-200 w-[10rem] h-[10rem] aspect-[4/3] object-cover" />

            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-[1.4rem] font-semibold text-sky-600">Gotowy biznes wraz z nieruchomością</h2>
                <p className="text-[1rem]">{truncatedDescription}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[0.8rem] text-neutral-400">10.02.2024</span>
                  <span className="text-[1rem] pb-[0.1rem] text-neutral-400">|</span>
                  <span className="text-[0.8rem] text-neutral-400">Польша, Краков</span>
                  <span className="text-[1rem] pb-[0.1rem] text-neutral-400">|</span>
                  <span className="text-[0.8rem] text-neutral-400">Firma Sp.z o.o.</span>
                </div>
                <PiHeartStraightDuotone className="text-[1.5rem] text-neutral-400 duration-300 hover:text-red-700" />
              </div>
            </div>
          </Link>
        </li>
        <li className="bg-white border border-neutral-200 duration-300 hover:shadow-md">
          <Link href="#" className="flex gap-[1rem] p-[1rem]">
            <Image src={profilePic} alt="Picture of the author" className="border border-neutral-200 w-[10rem] h-[10rem] aspect-[4/3] object-cover" />

            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-[1.4rem] font-semibold text-sky-600">Gotowy biznes wraz z nieruchomością</h2>
                <p className="text-[1rem]">{truncatedDescription}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[0.8rem] text-neutral-400">10.02.2024</span>
                  <span className="text-[1rem] pb-[0.1rem] text-neutral-400">|</span>
                  <span className="text-[0.8rem] text-neutral-400">Польша, Краков</span>
                  <span className="text-[1rem] pb-[0.1rem] text-neutral-400">|</span>
                  <span className="text-[0.8rem] text-neutral-400">Firma Sp.z o.o.</span>
                </div>
                <PiHeartStraightDuotone className="text-[1.5rem] text-neutral-400 duration-300 hover:text-red-700" />
              </div>
            </div>
          </Link>
        </li>
        <li className="bg-white border border-neutral-200 duration-300 hover:shadow-md">
          <Link href="#" className="flex gap-[1rem] p-[1rem]">
            <Image src={profilePic} alt="Picture of the author" className="border border-neutral-200 w-[10rem] h-[10rem] aspect-[4/3] object-cover" />

            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-[1.4rem] font-semibold text-sky-600">Gotowy biznes wraz z nieruchomością</h2>
                <p className="text-[1rem]">{truncatedDescription}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[0.8rem] text-neutral-400">10.02.2024</span>
                  <span className="text-[1rem] pb-[0.1rem] text-neutral-400">|</span>
                  <span className="text-[0.8rem] text-neutral-400">Польша, Краков</span>
                  <span className="text-[1rem] pb-[0.1rem] text-neutral-400">|</span>
                  <span className="text-[0.8rem] text-neutral-400">Firma Sp.z o.o.</span>
                </div>
                <PiHeartStraightDuotone className="text-[1.5rem] text-neutral-400 duration-300 hover:text-red-700" />
              </div>
            </div>
          </Link>
        </li>
        <li className="bg-white border border-neutral-200 duration-300 hover:shadow-md">
          <Link href="#" className="flex gap-[1rem] p-[1rem]">
            <Image src={profilePic} alt="Picture of the author" className="border border-neutral-200 w-[10rem] h-[10rem] aspect-[4/3] object-cover" />

            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-[1.4rem] font-semibold text-sky-600">Gotowy biznes wraz z nieruchomością</h2>
                <p className="text-[1rem]">{truncatedDescription}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[0.8rem] text-neutral-400">10.02.2024</span>
                  <span className="text-[1rem] pb-[0.1rem] text-neutral-400">|</span>
                  <span className="text-[0.8rem] text-neutral-400">Польша, Краков</span>
                  <span className="text-[1rem] pb-[0.1rem] text-neutral-400">|</span>
                  <span className="text-[0.8rem] text-neutral-400">Firma Sp.z o.o.</span>
                </div>
                <PiHeartStraightDuotone className="text-[1.5rem] text-neutral-400 duration-300 hover:text-red-700" />
              </div>
            </div>
          </Link>
        </li>
      </ul>
      <div className="flex justify-center mt-[2rem]">
        <ul className="flex gap-[0.5rem]">
          <li className="border bg-white duration-300 hover:bg-sky-600 group">
            <a href="#" className="flex items-center justify-center w-[1.5rem] h-[1.5rem]">
              <BsChevronLeft className=" duration-300 group-hover:text-white text-[0.8rem]" />
            </a>
          </li>
          <li className="border bg-white duration-300 hover:bg-sky-600 group">
            <a href="#" className="flex items-center justify-center w-[1.5rem] h-[1.5rem] text-[0.8rem] duration-300 group-hover:text-white">
              1
            </a>
          </li>
          <li className="border bg-white duration-300 hover:bg-sky-600 group">
            <a href="#" className="flex items-center justify-center w-[1.5rem] h-[1.5rem] text-[0.8rem] duration-300 group-hover:text-white">
              2
            </a>
          </li>
          <li className="border bg-white duration-300 hover:bg-sky-600 group">
            <a href="#" className="flex items-center justify-center w-[1.5rem] h-[1.5rem] text-[0.8rem] duration-300 group-hover:text-white">
              3
            </a>
          </li>
          <li className="border bg-white duration-300 hover:bg-sky-600 group">
            <a href="#" className="flex items-center justify-center w-[1.5rem] h-[1.5rem] text-[0.8rem] duration-300 group-hover:text-white">
              4
            </a>
          </li>
          <li className="border bg-white duration-300 hover:bg-sky-600 group">
            <a href="#" className="flex items-center justify-center w-[1.5rem] h-[1.5rem] text-[0.8rem] duration-300 group-hover:text-white">
              <BsChevronRight className=" duration-300 group-hover:text-white text-[0.8rem]" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
