import { FunctionComponent } from "react";
import FeatherIcon from "feather-icons-react";
import Link from "next/link";

const Footer: FunctionComponent = () => {
  return (
    <footer className="w-full py-2 bg-zinc-900 flex justify-center items-center">
      <Link href="https://github.com/ismailCodes/cryptosave">
        <a className="cursor-pointer" target="_blank">
          <FeatherIcon
            icon="github"
            stroke="white"
            size={40}
            strokeWidth={1}
            style={{ marginRight: "10px" }}
          />
        </a>
      </Link>
      <Link href="https://twitter.com/ismailCodes_">
        <a className="cursor-pointer" target="_blank">
          <FeatherIcon
            icon="twitter"
            stroke="white"
            size={40}
            strokeWidth={1}
          />
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
