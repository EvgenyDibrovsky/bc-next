"use client";

export default function AuthLayout({ children }) {
  return (
    <section className="mt-[20rem] pt-[8.5rem]">
      <div className="container">
        <div>{children}</div>
      </div>
    </section>
  );
}
