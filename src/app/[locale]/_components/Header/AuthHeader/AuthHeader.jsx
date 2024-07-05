import { Link } from "../../../../../navigation";
import { MdOutlineAccountCircle } from "react-icons/md";

export default function AuthHeader() {
  return (
    <div className="flex items-center gap-2">
      <MdOutlineAccountCircle className="text-mainMenu text-sky-600" />
      <Link href="/account" className="text-mainMenu font-medium duration-300 text-black hover:text-sky-600">
        Аккаунт
      </Link>
    </div>
  );
}
