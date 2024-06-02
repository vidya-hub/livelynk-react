interface AuthButtonProps {
  onClick: () => void;
  label: string;
  loading: boolean;
}

export default function AuthButton(props: AuthButtonProps) {
  console.log("Is loading ", props.loading);

  return (
    <button
      type="submit"
      className="text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-green font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-900 dark:focus:green-800"
      onClick={props.loading ? () => {} : props.onClick}
    >
      {props.loading ? "Loading....." : props.label}
    </button>
  );
}
