import { FunctionComponent } from "react";
import useAccount from "../Hooks/useAccount";
import { useGlobalContext } from "../Hooks/useGlobalContext";
import Button from "./Button";
import Logo from "./Logo";

interface Props {
  setShowModal: (showModal: boolean) => void;
}

const NavBar: FunctionComponent<Props> = ({ setShowModal }) => {
  const getAccount = useAccount();
  const { loggedIn } = useGlobalContext();
  return (
    <div className="absolute w-full flex justify-center mt-5">
      <div className="w-11/12 flex justify-between">
        <Logo />
        <Button text="Login" action={getAccount} />
      </div>
    </div>
  );
};

export default NavBar;
