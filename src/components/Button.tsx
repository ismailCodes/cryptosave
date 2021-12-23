import { FunctionComponent } from "react";

interface Props {
  text: string;
  action: () => void;
}

const Button: FunctionComponent<Props> = ({ text, action }) => {
  return (
    <>
      <button
        className="bg-transparent text-gray-50 rounded-sm text-sm md:text-base font-medium px-6 py-1 cursor-pointer z-50 border border-gray-50"
        onClick={async () => await action()}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
