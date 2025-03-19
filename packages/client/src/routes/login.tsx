import { createFileRoute } from "@tanstack/react-router";
import TextInput from "../components/ui/text-input";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="m-auto w-fit rounded-xl bg-white px-4 py-2">
      <h3 className="mx-2 mt-3 text-2xl font-bold md:text-4xl">Login</h3>

      <div className="md:flex md:flex-row">
        <TextInput name="firstname" placeholder="Enter first name" />
        <TextInput name="lastname" placeholder="Enter last name" />
      </div>
      <TextInput name="username" placeholder="Enter username" />

      <TextInput
        name="username"
        placeholder="Enter email  ex: user@gmail.com"
      />
      <TextInput name="password" placeholder="Enter password" />

      <TextInput name="confirmPassword" placeholder="Confirm password" />
      <button className="bg-primary mx-[45%] mt-3 mb-3 rounded-xl px-6 py-2 text-lg text-white">
        Login
      </button>
    </div>
  );
}
