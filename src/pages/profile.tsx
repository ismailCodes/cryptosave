import { FunctionComponent } from "react";
import NavBar from "../components/Nav";
import PageWrapper from "../components/PageWrapper";
import useWeb3 from "../Hooks/useWeb3";
import { ellipseAddress } from "../lib/utilities";

// const web3Modal = new Web3Modal({
//   network: "mainnet", // optional
//   cacheProvider: true, // optional
//   providerOptions: {}, // required
// });

const Profile: FunctionComponent = () => {
  const { connect, disconnect, address, web3Provider } = useWeb3();

  return (
    <PageWrapper>
      {/* <NavBar /> */}
      {/* <div className="w-full h-full flex justify-center items-center">
        <h1 className="text-4xl">You Should connect first</h1>
      </div> */}
      <div>
        {address && (
          <div className="grid">
            <div>
              <p className="mb-1">Address:</p>
              <p>{ellipseAddress(address)}</p>
            </div>
          </div>
        )}
        <hr />
        {web3Provider ? (
          <button className="button" type="button" onClick={disconnect}>
            Disconnect
          </button>
        ) : (
          <button className="button" type="button" onClick={connect}>
            Connect
          </button>
        )}
      </div>
    </PageWrapper>
  );
};

export default Profile;
