import { FunctionComponent } from "react";
import NavBar from "../components/NavBar";
import PageWrapper from "../components/PageWrapper";
import { useGlobalContext } from "../Hooks/useGlobalContext";
import { ellipseAddress } from "../lib/utilities";

const Profile: FunctionComponent = () => {
  const { connect, disconnect, address, web3Provider } = useGlobalContext();

  return (
    <PageWrapper>
      <div className="container"></div>
    </PageWrapper>
  );
};

export default Profile;
