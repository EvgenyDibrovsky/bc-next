import DefaultPage from "../../_components/Hero/DefaultPage/DefaultPage";
import RegisterForm from "../../_components/Auth/RegisterForm/RegisterForm";
export default function RegisterPage() {
  return (
    <>
      <DefaultPage bgClass="bg-auth" title="Регистрация" description="Краткое описание или лозунг" />

      <section className="py-[5rem]">
        <div className="container">
          <div className="w-5/12 mx-auto">
            <RegisterForm />
          </div>
        </div>
      </section>
    </>
  );
}
