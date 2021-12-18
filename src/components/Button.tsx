import { FunctionComponent } from "react";

interface Props {
  text: string;
  action: () => void;
}

const Button: FunctionComponent<Props> = ({ text, action }) => {
  return (
    <>
      <button
        className="bg-black text-gray-100 font-medium px-10 py-3 cursor-pointer z-50 absolute top-5 right-16"
        onClick={async () => await action()}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
