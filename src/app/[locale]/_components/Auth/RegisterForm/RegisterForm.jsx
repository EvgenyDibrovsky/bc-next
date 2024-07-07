// "use client";

// import { useState } from "react";

// export default function RegisterForm() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Логика обработки отправки формы
//     console.log("Username:", username);
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="form">
//         <div className="mb-5">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
//           />
//         </div>
//         <div className="mb-5">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
//           />
//         </div>
//         <div className="mb-5">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
//           />
//         </div>
//         <div className="flex justify-center">
//           <button type="submit" className="button-auth ">
//             Зарегистрироваться
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [accountType, setAccountType] = useState("regular");
  const [formData, setFormData] = useState({
    email: "",
    contactPerson: "",
    phone: "",
    country: "",
    region: "",
    locality: "",
    postalCode: "",
    companyName: "",
    streetAndNumber: "",
    website: "",
    nip: "",
    regon: "",
    krs: "",
    notes: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика обработки отправки формы
    console.log("Form Data:", formData);
  };

  return (
    <div className="shadow-md p-[1rem]">
      <div className="mb-5 flex justify-between">
        <label>
          <input type="radio" name="accountType" value="regular" checked={accountType === "regular"} onChange={() => setAccountType("regular")} />
          <span className="ml-4">Обычный аккаунт</span>
        </label>
        <label>
          <input type="radio" name="accountType" value="company" checked={accountType === "company"} onChange={() => setAccountType("company")} />
          <span className="ml-4">Фирменный аккаунт</span>
        </label>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="mb-5">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
          />
        </div>

        {accountType === "regular" ? (
          <>
            <div className="mb-5">
              <label htmlFor="contactPerson">Контактное лицо</label>
              <input
                type="text"
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="phone">Телефон</label>
              <input
                type="text"
                id="phone"
                name="phone"
                pattern="\+?[0-9]*"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="country">Выбор страны</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
              >
                {/* Add country options here */}
              </select>
            </div>
            <div className="mb-5">
              <label htmlFor="region">Выбор региона</label>
              <select
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
                className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
              >
                {/* Add region options here */}
              </select>
            </div>
            <div className="mb-5">
              <label htmlFor="locality">Местность</label>
              <input
                type="text"
                id="locality"
                name="locality"
                value={formData.locality}
                onChange={handleChange}
                className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="postalCode">Почтовый код</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                pattern="[0-9]*"
                value={formData.postalCode}
                onChange={handleChange}
                required
                className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
              />
            </div>
          </>
        ) : (
          <>
            <div className="mb-5">
              <label htmlFor="companyName">Название фирмы</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="phone">Телефон</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="contactPerson">Контактное лицо</label>
              <input
                type="text"
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="country">Выбор страны</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
              >
                {/* Add country options here */}
              </select>
            </div>
            <div className="mb-5">
              <label htmlFor="region">Выбор региона</label>
              <select
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
                className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
              >
                {/* Add region options here */}
              </select>
            </div>
            <div className="mb-5">
              <label htmlFor="locality">Местность</label>
              <input
                type="text"
                id="locality"
                name="locality"
                value={formData.locality}
                onChange={handleChange}
                className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="streetAndNumber">Улица и номер</label>
              <input
                type="text"
                id="streetAndNumber"
                name="streetAndNumber"
                value={formData.streetAndNumber}
                onChange={handleChange}
                required
                className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="postalCode">Почтовый код</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                pattern="[0-9]*"
                value={formData.postalCode}
                onChange={handleChange}
                required
                className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="website">Сайт фирмы</label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="nip">NIP/NR VAT</label>
              <input
                type="text"
                id="nip"
                name="nip"
                pattern="[0-9]*"
                value={formData.nip}
                onChange={handleChange}
                required
                className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="regon">REGON</label>
              <input
                type="text"
                id="regon"
                name="regon"
                pattern="[0-9]*"
                value={formData.regon}
                onChange={handleChange}
                className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="krs">KRS/EDG</label>
              <input
                type="text"
                id="krs"
                name="krs"
                pattern="[0-9]*"
                value={formData.krs}
                onChange={handleChange}
                className="w-full h-10 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
              />
            </div>
          </>
        )}

        <div className="mb-5">
          <label htmlFor="notes">Примечания для администратора</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
          ></textarea>
        </div>

        <div className="mb-5 ">
          <label className="flex">
            <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} required />
            <div className="ml-2">
              <span className="mr-[0.2rem]">Я принимаю</span>
              <a href="/regulations" target="_blank" className="text-blue-600">
                правила и условия
              </a>
            </div>
          </label>
        </div>

        <div className="flex justify-center">
          <button type="submit" className="button-auth">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
}
