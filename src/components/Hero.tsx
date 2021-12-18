import React, { FunctionComponent } from "react";
import useAccount from "../Hooks/useAccount";
import { useGlobalContext } from "../Hooks/useGlobalContext";
import Button from "./Button";
import HeroImage from "./HeroImage";
import HeroTitle from "./HeroTitle";
import HeroWrapper from "./HeroWrapper";

interface Props {
  title: string;
}

const Hero: FunctionComponent<Props> = ({ title }) => {
  const getAccount = useAccount();
  const { user, loggedIn } = useGlobalContext();

  return (
    <HeroWrapper>
      <HeroImage />
      <HeroTitle title={title} />
      {!loggedIn ? (
        <Button text="Connect Wallet" action={getAccount} />
      ) : (
        <Button text="Save My Money" action={() => {}} />
      )}
    </HeroWrapper>
  );
};

export default Hero;
