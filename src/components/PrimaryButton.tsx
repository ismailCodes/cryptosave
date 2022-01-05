import { FunctionComponent } from "react";

interface Props {
  buttonText: string;
  _style?: string;
  action?: () => void;
}

const PrimaryButton: FunctionComponent<Props> = ({
  buttonText,
  _style,
  action,
}) => {
  return (
    <button
      className={`inline-block text-sm px-8 py-3 leading-none rounded-md text-gray-200 bg-gray-900 cursor-pointer ${_style}`}
      onClick={() => action()}
    >
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
