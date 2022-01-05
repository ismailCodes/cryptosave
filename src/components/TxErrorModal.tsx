import SecondaryButton from "./SecondaryButton";

const TxErrorModal = ({ onCloseAction, errorMessage }) => {
  return (
    <div className="w-full flex flex-col pb-2 px-3 justify-centertext-gray-500">
      <div className="text-xl lg:text-2xl text-center lg:text-left text-gray-800">
        An error occured
      </div>
      <div className="text-md my-4 text-gray-900">{errorMessage}</div>
      <div className="flex w-full items-center justify-center">
        <SecondaryButton
          buttonText="Close"
          action={() => onCloseAction(false)}
          _style="w-1/2 mr-2"
        />
      </div>
    </div>
  );
};

export default TxErrorModal;
