import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { useGlobalContext } from "../Hooks/useGlobalContext";
import PageWrapper from "./PageWrapper";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const UserNotConnected: FunctionComponent = () => {
  const { connect, address, web3Provider } = useGlobalContext();
  const router = useRouter();

  return (
    <PageWrapper>
      <div className="w-full flex flex-col justify-center items-center mt-10">
        <div className="w-full font-base text-2xl text-gray-800 text-center">
          You should be connected to access your savings
        </div>
        <div className="mt-4">
          <SecondaryButton
            buttonText="Go back"
            action={() => router.push("/")}
            _style="mr-4"
          />
          <PrimaryButton buttonText="Connect" action={connect} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default UserNotConnected;
