import Link from "next/link";
// import { useTranslation } from 'react-i18next';
const NavHeader = () => {
  return (
    <ul className="list-none flex flex-wrap gap-5  group">
      <li>
        <Link href="#" className="text-textLinkFooter duration-200 text-black  hover:text-sky-600 ">
          Политика приватности
        </Link>
      </li>
      <li>
        <Link href="#" className="text-textLinkFooter duration-200 text-black  hover:text-sky-600">
          Условия использования
        </Link>
      </li>
      <li>
        <Link href="#" className="text-textLinkFooter duration-200 text-black  hover:text-sky-600 ">
          Регламент
        </Link>
      </li>
    </ul>
  );
};
export default NavHeader;
