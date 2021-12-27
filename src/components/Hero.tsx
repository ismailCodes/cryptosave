import React, { FunctionComponent, useState } from "react";
import { useGlobalContext } from "../Hooks/useGlobalContext";
import Button from "./Button";
import HeroImage from "./HeroImage";
import HeroTitle from "./HeroTitle";
import Logo from "./Logo";
import PageWrapper from "./PageWrapper";
import Link from "next/link";
import Modal from "./Modal";
import SavingForm from "./SavingForm";
import NavBar from "./Nav";

const Hero: FunctionComponent = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <PageWrapper>
      <NavBar />
      {/* <Modal
        show={showModal}
        onClose={setShowModal}
        title={"Deposit your Savings"}
      > */}
      {/* <SavingForm />
      </Modal> */}
      <HeroImage />
      <HeroTitle />
    </PageWrapper>
  );
};

export default Hero;
