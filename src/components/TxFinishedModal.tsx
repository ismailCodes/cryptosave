import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import TxDetail from "./TxDetail";

const TxFinishedModal = ({
  onCloseAction,
  transactionHash,
  blockHash,
  amount,
  _reset,
}) => {
  return (
    <div className="w-full flex flex-col pb-2 px-3 justify-centertext-gray-500">
      <div className="text-xl lg:text-2xl text-center lg:text-left text-gray-800">
        Transaction finished
      </div>
      <div className="w-full flex flex-col my-4 text-gray-900">
        <TxDetail _key="Tx Hash" value={transactionHash} />
        <TxDetail _key="Block Hash" value={blockHash} />
        {amount ? <TxDetail _key="Amount" value={amount} unit="ETH" /> : null}
      </div>
      <div className="flex w-full items-center justify-between">
        <a
          target="_blank"
          className={`inline-block text-sm py-3 leading-none rounded-md text-center text-gray-800 bg-transparent border border-gray-800 w-1/2 px-2 mr-2`}
          href={`${process.env.NEXT_PUBLIC_RINKEBY_BLOCK_EXPLORER_BASE_URL}/tx/${transactionHash}`}
        >
          View on explorer
        </a>
        <PrimaryButton
          buttonText="Close"
          action={() => {
            onCloseAction(false);
            _reset({ type: "RESET_TX" });
          }}
          _style="w-1/2"
        />
      </div>
    </div>
  );
};

export default TxFinishedModal;
