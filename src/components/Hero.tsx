import React, { FunctionComponent } from "react";
import Button from "./Button";
import HeroImage from "./HeroImage";
import HeroTitle from "./HeroTitle";
import HeroWrapper from "./HeroWrapper";

interface Props {
  title: string;
}

const Hero: FunctionComponent<Props> = ({ title }) => {
  return (
    <HeroWrapper>
      <HeroImage />
      <HeroTitle title={title} />
      <Button text="Connect Wallet" />
    </HeroWrapper>
  );
};

export default Hero;
