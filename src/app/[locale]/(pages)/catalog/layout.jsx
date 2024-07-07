import SidebarCatalog from "../../_components/SidebarCatalog/SidebarCatalog";
import DefaultPage from "../../_components/Hero/DefaultPage/DefaultPage";
export default function CatalogLayout({ children }) {
  return (
    <>
      <DefaultPage bgClass="bg-hero" title="Каталог" description="Краткое описание или лозунг" />

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
