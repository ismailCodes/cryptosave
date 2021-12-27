import { FunctionComponent } from "react";

interface Props {
  children: React.ReactNode;
}

const PageWrapper: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="w-full h-screen relative text-white flex flex-col items-center font-playFair bg-black">
      {children}
    </div>
  );
};

export default PageWrapper;
