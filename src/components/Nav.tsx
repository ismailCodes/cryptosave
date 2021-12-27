import { FunctionComponent, useEffect, useState } from "react";
import { useGlobalContext } from "../Hooks/useGlobalContext";
import useWeb3 from "../Hooks/useWeb3";
import Button from "./Button";
import Logo from "./Logo";

const NavBar: FunctionComponent = () => {
  const { connect, disconnect, address, web3Provider } = useWeb3();
  // const { connect, disconnect, address, web3Provider } = useGlobalContext();
  const [hardRender, setHardRender] = useState<boolean>(false);

  useEffect(() => {
    setHardRender(!hardRender);
  }, [address]);

  return (
    <div className="absolute w-full flex justify-center mt-5">
      <pre>{JSON.stringify(address, null, 2)}</pre>
      <div className="w-11/12 flex justify-between">
        <Logo />
        {web3Provider ? (
          <Button text="Disconnect" action={disconnect} />
        ) : (
          <Button text="Connect" action={connect} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
