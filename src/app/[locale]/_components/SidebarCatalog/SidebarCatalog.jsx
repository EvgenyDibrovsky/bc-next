import MenuCategoryList from "../../_components/MenuCategory/MenuCategoryListItem";
export default function SidebarCatalog() {
  return (
    <>
      <button className="w-full h-[4rem] flex items-center justify-center duration-300 bg-sky-600  hover:bg-sky-500  py-[1rem] px-[2rem] text-white font-bold text-[1.4rem] shadow-lg">
        Добавить объявление
      </button>

      <div className="py-[2rem] px-[1rem]">
        <MenuCategoryList />
      </div>
    </>
  );
}
