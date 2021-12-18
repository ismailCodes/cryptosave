import { FunctionComponent } from "react";
import StepItem from "./StepItem";

interface Props {
  title: string;
}

const HeroTitle: FunctionComponent<Props> = ({ title }) => {
  return (
    <div className="w-3/4 h-full absolute top-0 px-28 flex items-center justify-between">
      <div className="text-5xl font-medium pb-16">
        <div className="text-6xl font-black text-yellow-500 w-96">Save </div>
        {title}
      </div>
      <div className="w-96 text-2xl first-letter:text-6xl first-letter:font-extrabold justify-center">
        <StepItem step={1} text="Connect your wallet" />
        <StepItem step={2} text="Choose an amount" />
        <StepItem step={3} text="Set a withdraw date" />
        <StepItem step={4} text="Save your money" />
      </div>
    </div>
  );
};

export default HeroTitle;
