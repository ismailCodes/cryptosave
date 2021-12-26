import { FunctionComponent } from "react";
import useAccount from "../Hooks/useAccount";
import { useGlobalContext } from "../Hooks/useGlobalContext";
import Button from "./Button";
import Logo from "./Logo";

const NavBar: FunctionComponent = () => {
  const { login, logout } = useAccount();
  const { user, loggedIn } = useGlobalContext();
  return (
    <div className="absolute w-full flex justify-center mt-5">
      <div className="w-11/12 flex justify-between">
        <Logo />
        <Button
          text={loggedIn ? "Logout" : "Login"}
          action={loggedIn ? logout : login}
        />
      </div>
    </div>
  );
};

export default NavBar;
