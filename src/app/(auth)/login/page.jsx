"use client";
import { authClient } from "@/lib/auth-client";
import Lottie from "lottie-react";
import Animation from "../../../animation/Secure_Login.json";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
const LoginPage = () => {
  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log("Google sign in", data);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleloginFunc = async (data) => {
    console.log(data);

    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
      if (res) {
    toast.success("Login successful");
  }

  if (error) {
    toast.error(error.message || "Login failed");
  }
    console.log(res, error);
  };
  console.log("errors", errors);
  console.log(watch("email"));
  console.log(watch("password"));

  const [isShowPassword, setPassword] = useState(false);

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 mt-10 ">
       <ToastContainer />
      <div className="mr-10  p-10">
        <Lottie animationData={Animation}></Lottie>
      </div>
      <div className="p-4 rounded-xl bg-white ">
        <h2 className="font-bold text-3xl text-center">Login your account</h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleloginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Enter your email"
              {...register("email", { required: "Email filled is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
         <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input"
              placeholder="Type here password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            <span
              className="absolute right-2 top-4 cursor-pointer"
              onClick={() => setPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>
        <p className="mt-4">
          Don't have an account?{" "}
          <Link href={"/register"} className="text-red-500">
            Register
          </Link>
        </p>
        <button
          className="btn border-blue-500 text-blue-500 mt-2 w-full"
          onClick={handleGoogleSignin}
        >
          <FaGoogle></FaGoogle>Login with google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
