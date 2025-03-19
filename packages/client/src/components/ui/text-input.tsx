import { useState } from "react";

type InputProps = {
  name: string;
  placeholder: string;
  password?: boolean;
  error?: string | undefined;
};

export default function TextInput(props: InputProps) {
  const [value, setValue] = useState("");
  return (
    <div className="mx-2 mt-4 flex flex-col">
      <input
        className="w-[30ch] rounded-lg border-2 border-solid border-gray-300 px-2 py-1 transition-colors duration-100 outline-none focus:border-black"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
        type={props.password ? "password" : "text"}
        value={value}
        placeholder={props.placeholder}
        name={props.name}
      />
      {props.error && (
        <span className="mt-2 text-xs font-bold text-red-400">
          {props.error}
        </span>
      )}
    </div>
  );
}
