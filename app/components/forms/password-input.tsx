import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { TextInput } from "./text-input";

interface PasswordInputProps
  extends Omit<React.ComponentProps<typeof TextInput>, "type" | "leading"> {}

export const PasswordInput = ({ ...props }: PasswordInputProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <TextInput {...props} type={show ? "text" : "password"} />
      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        className="absolute right-3 md:right-4 top-[49px] md:top-[57px] -translate-y-1/2 text-tertiary-text dark:text-tertiary-text-dark"
        tabIndex={-1} // agar tidak mengganggu urutan tab jika tidak diinginkan
      >
        {show ? (
          <EyeOff className="w-4 md:w-5 h-4 md:h-5" />
        ) : (
          <Eye className="w-4 md:w-5 h-4 md:h-5" />
        )}
      </button>
    </div>
  );
};
