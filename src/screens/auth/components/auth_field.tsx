import React, { forwardRef, useState } from "react";
import PasswordToggleIcon from "../../../utils/components/password_toggle";

interface AuthFieldProps {
  label: string;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  isPassword?: boolean;
}

const AuthField = forwardRef<HTMLInputElement, AuthFieldProps>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-5">
      <label
        htmlFor={props.type}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      <div className="flex items-center border border-transparent focus-within:border-gray-300 dark:bg-gray-700 rounded-md max-w-sm mx-auto">
        <input
          ref={ref}
          type={showPassword ? "text" : props.type}
          id={props.placeholder}
          style={{ caretColor: "white" }}
          className="text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 flex-grow outline-none"
          placeholder={props.placeholder}
          autoComplete="off"
          required
        />
        {props.isPassword ? (
          <PasswordToggleIcon
            onTap={togglePasswordVisibility}
            showPassword={showPassword}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
});

export default AuthField;
