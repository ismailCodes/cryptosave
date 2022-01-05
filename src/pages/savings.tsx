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

  useEffect(() => {
    if (address) {
      (async () => {
        const _balance = await fetchBalance(address);
        setSaving({
          balance: ethers.utils.formatEther(_balance.balance.toString()),
          endTime: _balance.endTime.toNumber(),
        });

        console.log({
          balance: _balance.balance.toString(),
          date: _balance.endTime.toString(),
        });
      })();
    }
  }, [address]);

  if (!web3Provider || address === null) return <UserNotConnected />;

  return (
    <PageWrapper>
      <Modal
        show={isModalOpen}
        onClose={setIsModalOpen}
        title="Add Balance to your savings"
      >
        <SavingForm />
      </Modal>
      <div className="container w-full md:w-2/3 lg:w-1/2 md:mx-8 lg:mx-20">
        <div className="flex flex-wrap">
          {balance !== null && endTime !== null ? (
            <BalanceBox
              balance={balance}
              endTime={endTime}
              setIsModalOpen={setIsModalOpen}
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