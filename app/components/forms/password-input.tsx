import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";
import { TextInput } from "./text-input";

type PasswordInputProps = Omit<
  React.ComponentProps<typeof TextInput>,
  "type" | "leading"
>;

export const PasswordInput = ({ ...props }: PasswordInputProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <TextInput {...props} type={show ? "text" : "password"} leading={Lock} />
      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        className="absolute right-4 top-[59px] -translate-y-1/2 text-tertiary-text dark:text-tertiary-text-dark"
        tabIndex={-1} // agar tidak mengganggu urutan tab jika tidak diinginkan
      >
        {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      </button>
    </div>
  );
};
