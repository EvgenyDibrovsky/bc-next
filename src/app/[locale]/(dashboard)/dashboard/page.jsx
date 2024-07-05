import Title from "../../_components/Dashboard/TitlePageDashboard/TitlePageDashboard";

export default function DashboardPage() {
  return (
    <div>
      <Title title="Панель приборов" />

      <h2 className="mb-[2rem] font-semibold">Статистика просмотров:</h2>
      <ul className="grid grid-cols-3 gap-[1.875rem]">
        <li className="p-[0.5rem] shadow-md">
          <span>Профиль</span>
          <span>:</span>
          <span>20</span>
        </li>
        <li className="p-[0.5rem] shadow-md">
          <span>Посты</span>
          <span>:</span>
          <span>35</span>
        </li>
        <li className="p-[0.5rem] shadow-md">
          <span> Соц.сети</span>
          <span>:</span>
          <span>45</span>
        </li>
      </ul>
    </div>
  );
}
