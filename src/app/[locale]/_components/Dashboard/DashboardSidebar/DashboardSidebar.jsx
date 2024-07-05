import DashboardMainMenu from "../DashboardMainMenu/DashboardMainMenu";
import ClockDate from "../../ClockDate/ClockDate";
export default function DashboardSidebar({ onChangeSection }) {
  return (
    <div className="h-full flex flex-col justify-between">
      <DashboardMainMenu onChangeSection={onChangeSection} />
      <div className="w-full flex items-center h-[4rem]">
        <ClockDate />
      </div>
    </div>
  );
}
