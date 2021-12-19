import { FunctionComponent } from "react";

interface Props {
  children: React.ReactNode;
}

const PageWrapper: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="w-screen h-screen relative flex flex-col items-center font-serif bg-yellow-500/50">
      {children}
    </div>
  );
};

export default PageWrapper;
