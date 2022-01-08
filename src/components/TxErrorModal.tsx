import SecondaryButton from "./SecondaryButton";

const TxErrorModal = ({ onCloseAction, errorMessage, _reset }) => {
  return (
    <div className="w-full flex flex-col pb-2 px-3 justify-centertext-gray-500">
      <div className="text-xl lg:text-2xl text-center lg:text-left text-gray-800">
        An error occured
      </div>
      <div className="text-md my-4 text-gray-900">{errorMessage}</div>
      <div className="flex w-full items-center justify-center">
        <button
          className="w-1/2 mr-2 bg-transparent text-zinc-900 border border-zinc-900 rounded-md my-3 py-2"
          onClick={() => onCloseAction(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TxErrorModal;
