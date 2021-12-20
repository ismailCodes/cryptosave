import React, { FunctionComponent, useState } from "react";
import useAccount from "../Hooks/useAccount";
import { useGlobalContext } from "../Hooks/useGlobalContext";
import Button from "./Button";
import HeroImage from "./HeroImage";
import HeroTitle from "./HeroTitle";
import Logo from "./Logo";
import PageWrapper from "./PageWrapper";
import Link from "next/link";
import Modal from "./Modal";
import SavingForm from "./SavingForm";

interface Props {
  title: string;
}

const Hero: FunctionComponent<Props> = ({ title }) => {
  const getAccount = useAccount();
  const { user, loggedIn } = useGlobalContext();
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <PageWrapper>
      <Modal show={showModal} onClose={setShowModal} title={"Save Your Money"}>
        <SavingForm />
      </Modal>
      <Logo />
      <HeroImage />
      <HeroTitle title={title} />
      {!loggedIn ? (
        <Button text="Connect Wallet" action={getAccount} />
      ) : (
        <Button
          text="Save My Money"
          action={() => {
            setShowModal(true);
          }}
        />
      )}
    </PageWrapper>
  );
};

export default Hero;
