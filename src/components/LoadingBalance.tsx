import { FunctionComponent } from "react";
import FeatherIcon from "feather-icons-react";

const Loadingbalance: FunctionComponent = () => {
  return (
    <div className="w-full md:w-80 rounded-md h-32 px-5 py-3 flex justify-center items-center bg-gray-900 text-gray-100">
      <div className="animate-spin w-20 h-20 flex justify-center items-center">
        <FeatherIcon icon="loader" size="32" />
      </div>
    </div>
  );
};

export default Loadingbalance;
