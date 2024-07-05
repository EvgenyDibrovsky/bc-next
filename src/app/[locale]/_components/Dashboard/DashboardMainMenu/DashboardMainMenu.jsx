"use client";
import { usePathname, Link } from "../../../../../navigation";
import { IoHomeOutline, IoSettingsOutline, IoPencilSharp, IoBriefcaseOutline, IoWalletOutline, IoEyeOutline } from "react-icons/io5";

export default function DashboardMainMenu() {
  const pathname = usePathname();

  const linkClassName = (href) => {
    const isActive = pathname === href;
    return `w-full flex items-center gap-[1rem] border border-sky-600 duration-300 hover:border-sky-500 hover:text-sky-500 group ${isActive ? " border-sky-500 text-sky-500 " : ""}`;
  };

  const iconClassName = (isActive) => {
    return `bg-sky-600 duration-300 group-hover:bg-sky-500 px-[1rem] py-[0.5rem] ${isActive ? "bg-sky-500" : "bg-sky-600 "}`;
  };

  return (
    <nav className="flex flex-col items-start gap-4">
      <Link href="/dashboard" className={linkClassName("/dashboard")}>
        <div className={iconClassName(pathname === "/dashboard")}>
          <IoHomeOutline className="text-[1.4rem] text-white duration-300 group-hover:text-white" />
        </div>
        Dashboard
      </Link>

      <Link href="/dashboard/public" className={linkClassName("/dashboard/public")}>
        <div className={iconClassName(pathname === "/dashboard/public")}>
          <IoEyeOutline className="text-[1.4rem] text-white duration-300 group-hover:text-white" />
        </div>
        Public data
      </Link>

      <Link href="/dashboard/catalogs" className={linkClassName("/dashboard/catalogs")}>
        <div className={iconClassName(pathname === "/dashboard/catalogs")}>
          <IoBriefcaseOutline className="text-[1.4rem] text-white duration-300 group-hover:text-white" />
        </div>
        Catalogs
      </Link>

      <Link href="/dashboard/blog" className={linkClassName("/dashboard/blogs")}>
        <div className={iconClassName(pathname === "/dashboard/blog")}>
          <IoPencilSharp className="text-[1.4rem] text-white duration-300 group-hover:text-white" />
        </div>
        My blogs
      </Link>

      <Link href="/dashboard/payments" className={linkClassName("/dashboard/payments")}>
        <div className={iconClassName(pathname === "/dashboard/payments")}>
          <IoWalletOutline className="text-[1.4rem] text-white duration-300 group-hover:text-white" />
        </div>
        My payments
      </Link>

      <Link href="/dashboard/setting" className={linkClassName("/dashboard/setting")}>
        <div className={iconClassName(pathname === "/dashboard/setting")}>
          <IoSettingsOutline className="text-[1.4rem] text-white duration-300 group-hover:text-white" />
        </div>
        My setting
      </Link>
    </nav>
  );
}
