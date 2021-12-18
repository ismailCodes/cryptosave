import { FunctionComponent } from "react";

interface Props {
  children: React.ReactNode;
}

const HeroWrapper: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="w-screen h-screen relative flex flex-col items-center font-serif bg-gray-50">
      {children}
    </div>
  );
};

export default HeroWrapper;
