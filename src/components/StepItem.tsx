import React, { FunctionComponent } from "react";

interface Props {
  step: number;
  text: string;
}

const StepItem: FunctionComponent<Props> = ({ step, text }) => {
  return (
    <div className="flex items-center my-3">
      <div className="h-10 w-10 text-base flex items-center justify-center border-2 border-gray-700 rounded-full mr-2 hover:border-none hover:bg-yellow-400 hover:text-gray-900">
        {step}
      </div>
      <div className="text-lg">{text}</div>
    </div>
  );
};

export default StepItem;