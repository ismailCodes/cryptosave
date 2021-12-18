import { FunctionComponent } from "react";

interface Props {
  text: string;
}

const Button: FunctionComponent<Props> = ({ text }) => {
  return (
    <button className="bg-black text-gray-100 font-medium px-10 py-3 rounded-lg cursor-pointer z-50">
      {text}
    </button>
  );
};

export default Button;
