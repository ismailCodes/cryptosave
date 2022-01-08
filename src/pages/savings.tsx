import { ethers } from "ethers";
import { FunctionComponent, useEffect, useState } from "react";
import Countdown from "react-countdown";
import BalanceBox from "../components/BalanceBox";
import Loadingbalance from "../components/LoadingBalance";
import Modal from "../components/Modal";
import PageWrapper from "../components/PageWrapper";
import SavingForm from "../components/SavingForm";
import UserNotConnected from "../components/UserNotConnected";
import { useGlobalContext } from "../Hooks/useGlobalContext";
import useSave from "../Hooks/useSave";

interface ISaving {
  balance: string | null;
  endTime: number | null;
}

const initialSaving = { balance: null, endTime: null };

const Savings: FunctionComponent = () => {
  const { address, web3Provider } = useGlobalContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchBalance } = useSave();
  const [{ balance, endTime }, setSaving] = useState<ISaving>(initialSaving);
  const [lastTx, setLastTx] = useState<string>("");

  useEffect(() => {
    if (address) {
      (async () => {
        const _balance = await fetchBalance(address);
        console.log("balance", _balance);
        setSaving({
          balance: ethers.utils.formatEther(_balance.balance.toString()),
          endTime: _balance.endTime.toNumber() * 1000,
        });
      })();
    }
  }, [address, lastTx]);

  if (!web3Provider || address === null) return <UserNotConnected />;

  return (
    <PageWrapper>
      <Modal show={isModalOpen} onClose={setIsModalOpen}>
        <SavingForm
          setIsModalOpen={setIsModalOpen}
          setLastTx={setLastTx}
          showDaysInput={Number(balance) == 0}
        />
      </Modal>
      <div className="container w-full pt-20 md:w-2/3 lg:w-1/2 md:mx-8 lg:mx-20">
        <div className="flex w-full flex-wrap p-5">
          {balance !== null && endTime !== null ? (
            <BalanceBox
              balance={balance}
              endTime={endTime}
              setIsModalOpen={setIsModalOpen}
              setLastTx={setLastTx}
            />
          ) : (
            <Loadingbalance />
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Savings;
