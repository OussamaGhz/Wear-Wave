import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const LoginPage = () => {
  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(1, "Password is required"),
    agreement: z.boolean(),
  });

  const { register, formState, handleSubmit, setError } = useForm({
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const submitHandler = (formData) => {
    if (!formData.agreement) {
      setError("agreement", {
        type: "manual",
        message: "Please accept the terms to continue",
      });
      return;
    }
    console.log(formData);
    // Add your submission logic here if needed
  };

  return (
    <div className="bg-pink-200 xl:h-screen w-full flex justify-center">
      <form
        className="bg-white my-auto p-10 sm:my-20 sm:w-2/5"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <div className="flex flex-col my-10 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            {...register("name")}
            className="border-2 border-gray-300 py-3 px-2 w-full"
          />
          <p className="text-lg text-red-500">{errors.name?.message}</p>
          <input
            type="email"
            placeholder="Email Address"
            {...register("email")}
            className="border-2 border-gray-300 py-3 px-2 w-full"
          />
          <p className="text-lg text-red-500">{errors.email?.message}</p>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="border-2 border-gray-300 py-3 px-2 w-full"
          />
          <p className="text-lg text-red-500">{errors.password?.message}</p>
        </div>
        <div className="flex gap-3 my-2">
          <p className="text-lg">
            By continuing, I agree to the terms of use & privacy policy
          </p>
          <input type="checkbox" {...register("agreement")} className="w-5" />
        </div>
        <p className="text-lg text-red-500">{errors.agreement?.message}</p>
        <button
          type="submit"
          className="py-3 px-5 lg:px-12 text-sm font-semibold rounded-full border border-gray-200 hover:bg-gray-700 dark:bg-gray-800 text-white"
        >
          Continue
        </button>
        <p className="text-lg mt-2">
          Already have an account?{" "}
          <Link to="/login" className="hover:text-orange-800 text-orange-500">
            Login Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
