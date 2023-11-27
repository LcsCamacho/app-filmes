"use client";
import { FormEvent, useRef } from "react";
import { AuthService } from "../../services";
import { useRouter } from "next/navigation";
import { Coffee as CoffeeSVG } from "../../svgs/coffe";

export const SignInForm = () => {
  const refEmail = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const email = refEmail.current?.value;
    const password = refPassword.current?.value;
    if (email && password) {
      const responseAuth = await AuthService.login({
        email,
        password,
        redirect: false,
      });
      if (responseAuth?.error) {
        console.log(responseAuth.error);
        return;
      }
      router.replace("/home");
    }
  };
  return (
    <>
      <div className="title flex gap-2">
        <CoffeeSVG />
        <h1 className="text-white font-bold text-lg">WATCH</h1>
      </div>
      <h3 className="text-white">Enjoy the newest movies</h3>
      <form
        onSubmit={handleLogin}
        className="flex flex-col bg-white rounded shadow-lg p-12 mt-12"
      >
        <label className="font-semibold text-xs" htmlFor="usernameField">
          Username or Email
        </label>
        <input
          ref={refEmail}
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="text"
        />
        <label className="font-semibold text-xs mt-3" htmlFor="passwordField">
          Password
        </label>
        <input
          ref={refPassword}
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="password"
        />
        <button
          type="submit"
          className="flex items-center justify-center h-12 py-3 px-6 w-64 bg-[#6100C2] mt-8 rounded font-semibold text-sm text-white"
        >
          Login
        </button>
        <div className="flex mt-6 justify-center text-xs">
          <a className="text-blue-400 hover:text-blue-500" href="#">
            Forgot Password
          </a>
          <span className="mx-2 text-gray-300">/</span>
          <a className="text-blue-400 hover:text-blue-500" href="#">
            Sign Up
          </a>
        </div>
      </form>
    </>
  );
};
