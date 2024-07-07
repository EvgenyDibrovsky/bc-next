import LoginForm from "../../_components/Auth/loginForm/LoginForm";
import DefaultPage from "../../_components/Hero/DefaultPage/DefaultPage";

export default function LoginPage() {
  return (
    <>
      <DefaultPage bgClass="bg-auth" title="Авторизация" description="Краткое описание или лозунг" />

      <section className="py-[5rem]">
        <div className="container">
          <div className="w-5/12 mx-auto">
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
}
