import { FunctionComponent } from "react";

interface Props {
  buttonText: string;
  _style?: string;
  action?: () => void;
}

const SecondaryButton: FunctionComponent<Props> = ({
  buttonText,
  _style,
  action,
}) => {
  return (
    <button
      className={`inline-block text-sm px-8 py-3 leading-none rounded-md text-gray-800 bg-transparent border border-gray-800 ${_style}`}
      onClick={() => action()}
    >
      {buttonText}
    </button>
  );
};

export default SecondaryButton;
