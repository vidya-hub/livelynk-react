import React from "react";

interface AuthFieldProps {
  label: string;
  placeholder: string;
  type: string;
}

export default function AuthField(props: AuthFieldProps) {
  return (
    <div className="mb-5">
      <label
        htmlFor={props.type}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.type}
        className="text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700  dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:focus:border-s "
        placeholder={props.placeholder}
        required
      />
    </div>
  );
}
