"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type TLoginForm = {
  username: string;
  password: string;
};

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const LoginForm = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TLoginForm> = (data: TLoginForm) => {
    signIn("credentials", {
      username: data.username,
      password: data.password,
      callbackUrl: "/",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-slate-600 shadow-md rounded-md p-10 lg:w-1/2 md:w-full"
    >
      <label htmlFor="username" className="block mb-2">
        Username
      </label>
      <input
        type="text"
        id="username"
        className="form-input w-full px-4 py-2 outline-none focus:border-none border border-gray-300 rounded-md focus:ring-1 focus:text-teal-700 focus:ring-teal-700 transition-all"
        placeholder="Your Username"
        {...register("username")}
      />
      <p className="text-red-500 text-sm mt-1">{errors.username?.message}</p>
      <label htmlFor="password" className="block mb-2">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="form-input w-full px-4 py-2 outline-none focus:border-none border border-gray-300 rounded-md focus:ring-1 focus:text-teal-700 focus:ring-teal-700 transition-all"
        placeholder="Your Password"
        {...register("password")}
      />
      <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
      <button
        className="mt-4 bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded w-full"
        type="submit"
      >
        Login
      </button>
      {error && (
        <p className="text-red-500 text-sm mt-2">
          {error === "CredentialsSignin" ? "Invalid credentials" : "Error"}
        </p>
      )}
    </form>
  );
};

export default LoginForm;
