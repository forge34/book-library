import { createFileRoute } from "@tanstack/react-router";
import TextInput from "../components/ui/text-input";
import { z } from "zod";
import { useZorm } from "react-zorm";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

const FormSchema = z.object({
  emailOrusername: z
    .string()
    .email("Invalid email format")
    .or(z.string().min(1, "please enter username")),
  password: z.string().min(8, "password should be at least 8 characters"),
});

function RouteComponent() {
  const zo = useZorm("login", FormSchema, {
    async onValidSubmit(e) {
      e.preventDefault();

      const data = Object.fromEntries(new FormData(e.target).entries());
      data.username = data.emailOrusername;

      await fetch(`${import.meta.env.VITE_API}/login`, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-Type": "Application/json" },
      });
    },
  });

  return (
    <form ref={zo.ref} className="m-auto w-fit rounded-xl bg-white px-4 py-2">
      <h3 className="mx-2 mt-3 text-2xl font-bold md:text-4xl">Login</h3>

      <TextInput
        name={zo.fields.emailOrusername()}
        error={zo.errors.emailOrusername()?.message}
        placeholder="Enter username or email"
      />

      <TextInput
        name={zo.fields.password()}
        error={zo.errors.password()?.message}
        password={true}
        placeholder="Enter password"
      />

      <div className="flex flex-row">
        <button
          type="submit"
          className="bg-primary mx-auto mt-3 mb-3 rounded-xl px-6 py-2 text-lg text-white"
        >
          Login
        </button>
      </div>
    </form>
  );
}
