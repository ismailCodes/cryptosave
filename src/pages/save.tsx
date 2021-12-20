import type { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import HeroImage from "../components/HeroImage";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Saver: NextPage = () => {
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
    <div className="w-screen h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="w-full h-full absolute z-20"></div>
      {/* <Image
        src="/images/form_bg.jpg"
        width={3840}
        height={2880}
        objectFit="cover"
      /> */}
      <HeroImage />

      <div className="w-1/3 h-1/3 flex justify-center items-center absolute z-30 bg-white rounded-lg border border-white border-opacity-30 shadow-2xl shadow-yellow-300/10">
        <form
          className="flex flex-col items-center px-4 w-11/12 h-full justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="font-medium w-11/12 text-center text-lg text-gray-900 px-4 rounded-md py-2 mb-6">
            Pick a date and amount to Save your Money
          </div>
          {/* register your input into the hook by invoking the "register" function */}
          {/* <input
            className="border-black h-10 w-11/12 my-4 px-4 bg-gray-900/50 border-white/30 text-gray-80 font-medium rounded-md"
            {...register("example")}
          /> */}
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="h-10 w-11/12 my-4 px-4 bg-transparent border-b-2 border-yellow-400/50 text-gray-80 font-medium text-white mx-6"
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            placeholder="Amount"
            type="number"
            className="h-10 w-11/12 my-4 px-4 bg-transparent border-b-2 border-yellow-400/50 text-gray-80 font-medium text-white"
            {...register("exampleRequired", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            className="bg-yellow-400/70 text-gray-800 font-medium px-10 py-3 cursor-pointer rounded-lg"
            type="submit"
            value="Save"
          />
        </form>
      </div>
    </div>
  );
};

export default Saver;
