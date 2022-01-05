import Link from "next/link";
import { FunctionComponent } from "react";
import { ellipseAddress } from "../lib/utilities";

interface Props {
  _href: string;
  address: string;
  _style?: string;
}

const UserAddrerss: FunctionComponent<Props> = ({ _href, address, _style }) => {
  return (
    <Link href={_href}>
      <a className="text-sm text-center font-normal hover:underline cursor-pointer">
        {ellipseAddress(address)}
      </a>
    </Link>
  );
};

export default UserAddrerss;