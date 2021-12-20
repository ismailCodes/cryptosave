import { FunctionComponent } from "react";

interface Props {
  text: string;
  action: () => void;
}

const Button: FunctionComponent<Props> = ({ text, action }) => {
  return (
    <>
      <button
        className="bg-yellow-400 text-gray-800 rounded-md font-medium px-4 py-2 cursor-pointer z-50 absolute top-5 right-36"
        onClick={async () => await action()}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
