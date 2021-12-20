import { FunctionComponent } from "react";

interface Props {
  children: React.ReactNode;
}

const PageWrapper: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="w-screen h-screen relative text-white flex flex-col items-center font-serif bg-black">
      {children}
    </div>
  );
};

export default PageWrapper;
