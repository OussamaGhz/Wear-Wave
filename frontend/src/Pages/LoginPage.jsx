import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const SignupPage = () => {
  const schema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(1, "Password is required"),
  });

  const { register, formState, handleSubmit, setError } = useForm({
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const submitHandler = (formData) => {
    console.log(formData);
    // Add your submission logic here if needed
  };

  return (
    <div className="bg-pink-200 w-full flex justify-center">
      <form
        className="bg-white my-auto p-10 sm:my-20 sm:w-2/5"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="flex flex-col my-10 gap-4">
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
        <button
          type="submit"
          className="py-3 px-5 lg:px-12 text-sm font-semibold rounded-full border border-gray-200 hover:bg-gray-700 dark:bg-gray-800 text-white"
        >
          Continue
        </button>
        <p className="text-lg mt-2">
          You dont have an account?{" "}
          <Link to="/signup" className="hover:text-orange-800 text-orange-500">
            Signup now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
