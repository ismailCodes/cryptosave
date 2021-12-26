import { FunctionComponent } from "react";
import NavBar from "../components/Nav";
import PageWrapper from "../components/PageWrapper";

const Profile: FunctionComponent = () => {
  return (
    <PageWrapper>
      <NavBar />
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="text-4xl">You Should connect first</h1>
      </div>
    </PageWrapper>
  );
};

export default Profile;
