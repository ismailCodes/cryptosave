import { FunctionComponent } from "react";

interface Props {
  buttonText: string;
}

const CercleButton: FunctionComponent<Props> = ({ buttonText }) => {
  return (
    <div className="relative flex items-center">
      <div className="bg-gradient-to-r from-blue-700/40 to-transparent h-16 w-16 rounded-full"></div>
      <button className="text-zinc-50 font-semibold text-lg absolute left-6 whitespace-nowrap pb-1">
        {buttonText} <span className="text-2xl">&#10230;</span>
      </button>
    </div>
  );
};

export default CercleButton;
