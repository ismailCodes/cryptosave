import SecondaryButton from "./SecondaryButton";
import FeatherIcon from "feather-icons-react";

const TxStartedModal = ({ onCloseAction }) => {
  return (
    <>
      <div className="w-full flex flex-col pb-2 px-3 justify-centertext-gray-500">
        <div className="text-xl lg:text-2xl text-center lg:text-left text-gray-800">
          Your transaction has started
        </div>
      </div>
      <div className="w-full h-32 flex justify-center items-center">
        <div className="animate-spin w-20 h-20 flex justify-center items-center">
          <FeatherIcon icon="loader" size="32" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center mb-4">
        <SecondaryButton
          buttonText="Close"
          action={() => onCloseAction(false)}
          _style="w-1/2 mr-2"
        />
      </div>
    </>
  );
};

export default TxStartedModal;
