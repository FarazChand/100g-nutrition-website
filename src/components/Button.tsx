type ButtonProps = {
  buttonText: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ buttonText, onClick }) => {
  return (
    <button
      className="mb-2 w-full max-w-full rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-700 sm:mb-0 sm:w-max"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
