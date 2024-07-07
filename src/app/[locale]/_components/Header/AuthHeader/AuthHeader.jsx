import { Link } from "../../../../../navigation";
import { MdOutlineAccountCircle } from "react-icons/md";

export default function AuthHeader() {
  return (
    <div className="flex items-center gap-2">
      <MdOutlineAccountCircle className="text-mainMenu text-sky-600" />
      <Link href="/register" className="text-mainMenu font-medium duration-300 text-black hover:text-sky-600">
        Register
      </Link>
      <span className="mx-[0.1rem]">|</span>
      <Link href="/login" className="text-mainMenu font-medium duration-300 text-black hover:text-sky-600">
        Вход
      </Link>
    </div>
  );
}
