// import MenuFooter from "./MenuFooter";
import Logo from "../LogoFooter/LogoFooter";
import LinksFooter from "../LinksFooter/LinksFooter";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
const Footer = () => {
  return (
    <footer className="w-full border-t bg-white border-sky-600  py-[4rem]">
      <div className="container">
        <div>
          <div className="mb-[2rem] flex justify-between items-center ">
            <Logo />
            <LinksFooter />
          </div>

          <div className="flex justify-between">
            <p className="flex text-textFotterMini text-black">© 2023 Все права защищены.</p>
            <div className="flex">
              <p className="flex text-textFotterMini text-black items-baseline">
                Powered by
                <a href="https://edweb.site" target="_blank" rel="noreferrer" className="duration-200 hover:underline">
                  <span className="ml-1 font-semibold text-textFotterMini  text-black">edWeb</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </footer>
  );
};
export default Footer;
