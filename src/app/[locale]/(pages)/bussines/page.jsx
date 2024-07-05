import Titles from "../../_components/PageSettings/TitlePage/Titles";
// import { useTranslations } from "next-intl";

export default function bussines() {
  // const t = useTranslations("pages.about");

  return (
    <section className="py-[2.5rem]">
      <div className="container">
        {/* <Titles title={t("title")} subTitle={t("sub_title")} /> */}
        <Titles title="Бизнес" subTitle="Подзаголовок" />
      </div>
    </section>
  );
}
