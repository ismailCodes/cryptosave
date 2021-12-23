import type { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const SavingForm: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [startDate, setStartDate] = useState(
    new Date(new Date().getTime() + 86400000 * 2)
  );

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="w-full flex justify-center items-center">
      <form
        className="flex flex-col justify-center w-full h-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="amount">
          What is the amount of your future savings?
        </label>
        <input
          name="amount"
          placeholder="Amount"
          type="number"
          className="h-10 w-5/12 my-4 px-4 border border-gray-300 text-gray-80 font-medium text-gray-900"
          {...register("exampleRequired", { required: true })}
        />
        <label htmlFor="amount">
          Whaen do you plan to withdraw your savings?
        </label>

        <div className="w-full flex justify-between">
          <DatePicker
            placeholderText="Select Date"
            // selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="h-10 w-11/12 my-4 px-4 border border-gray-300 text-gray-80 font-medium text-gray-900"
          />
        </div>

        {errors.exampleRequired && <span>This field is required</span>}
        <input
          className="bg-yellow-400/70 text-gray-800 font-medium px-10 py-3 cursor-pointer rounded-lg"
          type="submit"
          value="Deposit my savings"
        />
      </form>
    </div>
  );
};

export default SavingForm;
