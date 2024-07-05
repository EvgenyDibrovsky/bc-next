import DashboardSidebar from "../../_components/Dashboard/DashboardSidebar/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <section className="py-[2.5rem]">
      <div className="container">
        <div className="flex gap-[1.875rem]">
          <div className="w-3/12">
            <DashboardSidebar />
          </div>
          <div className="w-9/12">{children}</div>
        </div>
      </div>
    </section>
  );
}
