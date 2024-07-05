import Logo from "../LogoHeader/LogoHeader";
import MainMenu from "../MainMenuHeader/MainMenu";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { NextIntlClientProvider, useMessages } from "next-intl";
import AuthHeader from "../AuthHeader/AuthHeader";
const MainHeader = () => {
  const messages = useMessages();
  return (
    <header className="fixed z-50 top-0 left-0 bg-white/80 backdrop-blur-sm rounded-[0rem] w-full flex items-center h-[4rem] ">
      <div className="container">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex gap-8 ">
            <MainMenu />
            <div className="flex gap-5">
              <AuthHeader />
              <NextIntlClientProvider messages={messages}>
                <LanguageSwitcher />
              </NextIntlClientProvider>
              <ToggleTheme />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default MainHeader;
