"use client";

import { usePathname, Link } from "../../../../../navigation";

const MainMenu = () => {
  const pathname = usePathname();

  const linkClassName = (href) => {
    const isActive = pathname === href;
    return `text-mainMenu font-medium duration-200 hover:text-sky-600 dark:hover:text-sky-400 ${isActive ? "text-sky-600" : "text-black dark:text-white"}`;
  };

  return (
    <nav className="flex items-center gap-4">
      <Link href="/" className={linkClassName("/")}>
        Главная
      </Link>
      <Link href="/catalog" className={linkClassName("/catalog")}>
        Каталог
      </Link>
      <Link href="/contacts" className={linkClassName("/contacts")}>
        Контакты
      </Link>
    </nav>
  );
};

export default MainMenu;
