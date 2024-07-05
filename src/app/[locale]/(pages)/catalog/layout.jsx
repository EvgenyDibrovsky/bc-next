import SidebarCatalog from "../../_components/SidebarCatalog/SidebarCatalog";
import CatalogSlider from "../../_components/Sliders/CatalogSlider/CatalogSlider";
export default function CatalogLayout({ children }) {
  return (
    <>
      <section className="relative flex items-center bg-hero bg-no-repeat bg-center bg-cover bg-fixed h-[20rem] pt-[4rem]">
        <div className="absolute z-0 top-0 left-0 w-full h-full bg-black/10"></div>

        <div className="container">
          <div className="flex gap-[1.875rem] relative z-10 ">
            <div className="w-4/12 flex flex-col justify-center">
              <h1 className="text-[2rem] font-bold text-white">Каталог</h1>
              <p className="text-[1rem] font-bold text-white">Краткое описание или лозунг</p>
            </div>
            <div className="w-8/12">
              <CatalogSlider />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[2.5rem]">
        <div className="container">
          <div className="flex gap-[1.875rem]">
            <div className="w-3/12">
              <SidebarCatalog />
            </div>
            <div className="w-9/12">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}
