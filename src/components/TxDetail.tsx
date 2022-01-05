import { FunctionComponent } from "react";

interface IProps {
  _key: string;
  value: string;
  unit?: string;
}

const TxDetail: FunctionComponent<IProps> = ({ _key, value, unit }) => {
  return (
    <div className="text-base font-bold py-2">
      {_key}:{" "}
      <span className="text-sm font-normal break-all text-gray-700">
        {value} {unit}
      </span>
    </div>
  );
};

export default TxDetail;
