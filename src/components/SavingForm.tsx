import { FunctionComponent, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useGlobalContext } from "../Hooks/useGlobalContext";
import useSave from "../Hooks/useSave";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  amount: yup.number().required(),
  days: yup.number().required(),
});

type Inputs = {
  amount: string;
  days: string;
};

const SavingForm: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const { address } = useGlobalContext();

  const { deposit } = useSave();

  const onSubmit: SubmitHandler<Inputs> = async ({ amount, days }) => {
    if (address) {
      // console.log({ amount, days, x: typeof amount, y: typeof days });
      await deposit(amount, days);
      reset();
    }
  };

  //if user has balannce do nott tshow days input

  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full my-2 flex justify-between">
        <input
          className="w-2/3 px-2 py-1 outline-none rounded-md border border-gray-300 text-md"
          type="text"
          placeholder="Amount of ether"
          {...register("amount", { required: true })}
        />
        <input
          className="w-1/4 px-2 py-1 outline-none rounded-md border border-gray-300 text-md"
          type="text"
          placeholder="Days"
          {...register("days", { required: true })}
        />
      </div>
      {errors.amount && (
        <span className="text-sm text-red-500">
          * {errors.amount.message.split(",")[0]}
        </span>
      )}
      {errors.days && (
        <span className="text-sm text-red-500">
          * {errors.days.message.split(",")[0]}
        </span>
      )}

      <div>
        <button className="w-full bg-gray-900 text-gray-50 rounded-md my-3 py-2">
          Save
        </button>
      </div>
    </form>
  );
};

export default SavingForm;
