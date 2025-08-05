import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { TextField } from "./text-field";

interface PasswordFieldProps
  extends Omit<React.ComponentProps<typeof TextField>, "type"> {}

export const PasswordField = ({ ...props }: PasswordFieldProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <TextField {...props} type={show ? "text" : "password"} />
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
