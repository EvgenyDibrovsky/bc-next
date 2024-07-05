// i18n.ts

import { getRequestConfig } from 'next-intl/server';
import {notFound} from 'next/navigation';
import { locales } from "./navigation";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});






// // i18n.ts

// import { getRequestConfig, notFound } from 'next-intl/server';
// import { locales } from "./navigation";

// export default getRequestConfig(async ({ locale }) => {
//   if (!locales.includes(locale)) return notFound();
//   const messages = (await import(`../messages/${locale}.json`)).default;
//   return {
//     messages,
//   };
// });
