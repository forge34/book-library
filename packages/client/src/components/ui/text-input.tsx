import { useState } from "react";

type InputProps = {
  name: string;
  placeholder: string;
};

export default function TextInput(props: InputProps) {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        className="mx-2 mt-4 w-[30ch] rounded-lg border-2 border-solid border-gray-300 px-2 py-1 transition-colors duration-100 outline-none focus:border-black"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
        type="text"
        value={value}
        placeholder={props.placeholder}
        name={props.name}
      />
    </div>
  );
}
