"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

const schema = yup.object({
  email: yup.string().email().required(),
  fullName: yup.string().required(),
  messages: yup.string(),
});
type FormData = yup.InferType<typeof schema>;
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    console.log(data.email);
    toast.success("Data successed send to Aryobimo");
  };
  return (
    <section id={"contact"} className="bg-bgSecondary w-full h-screen py-10">
      <h1 className="text-4xl text-center text-primary">Contact me</h1>
      <div className="text-primary flex justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-bgPrimary md:w-1/3 w-10/12"
        >
          <div className="flex flex-col items-center md:ml-5 gap-10 p-5">
            <div className="w-full">
              <p>Email</p>
              <input
                {...register("email")}
                className="w-full h-6 text-black ps-2"
              />
              <p className="text-red-600 font-bold">
                {errors.email && "Must Fill an Email"}
              </p>
            </div>
            <div className="w-full">
              <p>Full Name</p>
              <input
                {...register("fullName")}
                className="w-full h-6 text-black ps-2"
              />
              <p className="text-red-600 font-bold">
                {errors.fullName && "Must Fill Full Name"}
              </p>
            </div>
            <div className="w-full">
              <p>Messages</p>
              <textarea
                {...register("messages")}
                className="w-full text-black ps-2 pe-6 items-start"
              />
              {/* <input
                {...register("messages")}
                className="w-full text-black ps-2 pe-6 items-start"
              /> */}
            </div>
            <div className="w-full flex justify-end mr-5">
              <button className="relative bg-white border-2 border-secondary px-3 py-1 rounded-xl group">
                <span className="absolute w-0 top-0 right-0 h-full bg-secondary group-hover:w-full z-0 transition-all duration-500 rounded-lg"></span>
                <span className="relative z-10 text-secondary group-hover:text-white transition-colors">
                  Send
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
