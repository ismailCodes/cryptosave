import { FunctionComponent } from "react";
import FeatherIcon from "feather-icons-react";
import Link from "next/link";

const Footer: FunctionComponent = () => {
  return (
    <footer className="w-full py-2 pb-4 bg-zinc-900 flex flex-col justify-center items-center">
      <div className="bg-blue-500 h-1 w-10 my-4 rounded-full shadow-xl shadow-blue-300" />
      <div className="flex justify-center items-center">
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
      </div>
    </footer>
  );
};

export default Footer;
