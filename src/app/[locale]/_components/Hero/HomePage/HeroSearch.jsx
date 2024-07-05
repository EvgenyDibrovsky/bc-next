import React, { useState } from "react";

export default function HeroSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCities] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    // Логика поиска: можно добавить вызов API или другую логику
    console.log("Поиск:", searchTerm, country, category);
  };

  return (
    <div className="hero-search w-full flex gap-2 bg-white/50 p-2 backdrop-blur-md ">
      <input type="text" placeholder="Поиск..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="py-[1rem] px-[1rem] w-full focus:outline-0" />

      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="appearance-none py-[1rem] pl-[1rem] pr-[2.3rem]  w-full focus:outline-none cursor-pointer bg-[url('/images/arrow-select.svg')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[length:1.2rem_1.2rem] bg-white"
      >
        <option value="">Все страны</option>
        <option value="Ukraine">Украина</option>
        <option value="USA">США</option>
        <option value="Poland">Польша</option>
        {/* Дополнительные страны */}
      </select>

      <select
        value={cities}
        onChange={(e) => setCities(e.target.value)}
        className="appearance-none py-[1rem] pl-[1rem] pr-[2.3rem]  w-full focus:outline-none cursor-pointer bg-[url('/images/arrow-select.svg')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[length:1.2rem_1.2rem] bg-white"
      >
        <option value="">Все города</option>
        <option value="Ukraine">Украина</option>
        <option value="USA">США</option>
        <option value="Poland">Польша</option>
        {/* Дополнительные страны */}
      </select>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="appearance-none py-[1rem] pl-[1rem] pr-[2.3rem]  w-full focus:outline-none cursor-pointer bg-[url('/images/arrow-select.svg')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[length:1.2rem_1.2rem] bg-white"
      >
        <option value="">Все категории</option>
        <option value="tech">Технологии</option>
        <option value="health">Здравоохранение</option>
        <option value="finance">Финансы</option>
        {/* Дополнительные категории */}
      </select>
      <button onClick={handleSearch} className="flex items-center justify-center bg-sky-600 px-[1.5rem] w-[40rem] text-white  font-semibold duration-300 hover:bg-sky-500">
        Поиск
      </button>
    </div>
  );
}
