"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
const RegisterPage = () => {
    const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setPassword] = useState(false);
  const handleRegisterFunc = async (data) => {
    console.log(data);
    const { email, name, photo, password } = data;
    
    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/login",
    });
    console.log(res, error);
    if (error) {
   
      toast.error(error.message || "Registration failed");
    }

    if (res) {
      alert("Sign up successful");
       router.push("/login"); 
       toast.success("Login successful");
    }
   
  };
  console.log("errors", errors);
  console.log(watch("email"));
  console.log(watch("password"));

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 mt-10">
       <ToastContainer />
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center">
          Register your account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="name"
              className="input"
              placeholder="Enter your name"
              {...register("name", { required: "Name filled is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>

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

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your photo url"
              {...register("photo", {
                required: "Photo Url filled is required",
              })}
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
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
           <p className="mt-4">
                    Already have an account?{" "}
                    <Link href={"/login"} className="text-yellow-500">
                      Login
                    </Link>
                  </p>
          <button className="btn w-full bg-slate-800 text-white">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
