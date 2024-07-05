import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex gap-4 items-center">
      <div className="flex flex-col">
        <span className="text-sky-600 font-bold transition-all duration-500 text-[1rem] leading-[14px]">Бизнес </span>
        <span className="text-sky-600 font-bold transition-all duration-500 text-[1rem] leading-[14px]"> каталог</span>
      </div>
    </Link>
  );
};
export default Logo;
