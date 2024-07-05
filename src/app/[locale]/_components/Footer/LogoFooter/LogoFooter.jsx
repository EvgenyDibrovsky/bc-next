import Link from "next/link";
import { SiHomebridge } from "react-icons/si";

const Logo = () => {
  return (
    <Link href="/" className="flex gap-4 items-center">
      <SiHomebridge className="text-sky-500 dark:text-sky-500 transition-all duration-500 text-[2rem] z-50" />
      <div className="hidden sm:flex flex-col z-50">
        <p className="text-logoText text-black dark:text-white">Каталог</p>
        <p className="text-logoText text-black dark:text-white">Недвижимости</p>
      </div>
    </Link>
  );
};
export default Logo;
