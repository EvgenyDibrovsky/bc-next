// actions.js или actions.ts для TypeScript
"use server";

export async function handleSubmit(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  console.log({ name, email, subject, message });
  return { success: true, message: "Форма успешно отправлена" };
}
