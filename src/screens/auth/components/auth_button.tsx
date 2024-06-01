interface AuthButtonProps {
  onClick: () => void;
  label: string;
}

export default function AuthButton(props: AuthButtonProps) {
  return (
    <button
      type="submit"
      className="text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-green font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-900 dark:focus:green-800"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
