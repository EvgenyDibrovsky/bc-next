import HeroSliderDefaultPage from "../../Sliders/HeroSliderDefaultPage/HeroSliderDefaultPage";

export default function DefaultPage({ bgClass, title, description }) {
  return (
    <section className={`relative flex items-center ${bgClass} bg-no-repeat bg-center bg-cover bg-fixed h-[20rem] pt-[4rem]`}>
      <div className="absolute z-0 top-0 left-0 w-full h-full bg-black/10"></div>
      <div className="container">
        <div className="flex gap-[1.875rem] relative z-10 ">
          <div className="w-4/12 flex flex-col justify-center">
            <h1 className="text-[2rem] font-bold text-black">{title}</h1>
            <p className="text-[1rem] font-bold text-black">{description}</p>
          </div>
          <div className="w-8/12">
            <HeroSliderDefaultPage />
          </div>
        </div>
      </div>
    </section>
  );
}
