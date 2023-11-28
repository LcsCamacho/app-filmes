"use client";
import { FormEvent, useRef } from "react";
import { AuthService } from "../../services";
import { useRouter } from "next/navigation";
import CoffeeSVG from "@/../public/svgs/coffee.svg"
import Image from "next/image"
import { Button, Input, } from "@nextui-org/react";

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
      router.replace("/filmes");
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center justify-center">
        <Image src={CoffeeSVG} alt="svg café xicara" />
        <h1 className="text-white font-bold text-lg letter-spacing-1">WATCH</h1>
      </div>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-2 sign-in-form"
      >
        <label className="font-semibold text-xs text-white" htmlFor="usernameField">
          Username or Email
        </label>
        <Input
          ref={refEmail}
          type="text"
          variant="underlined"
          color="primary"
          className="text-white"
        />
        <label className="font-semibold text-xs mt-3 text-white" htmlFor="passwordField">
          Password
        </label>
        <Input
          ref={refPassword}
          type="password"
          variant="underlined"
          color="primary"
          className="text-white"
        />
        <footer
          className="flex flex-col gap-4 mt-2"
        >
          <Button
            type="submit"
            color="primary"
            className="mt-3 bg-purple"
          >
            Login
          </Button>
          <a className="text-white hover:underline" href="#">
            Esqueci a senha
          </a>
          <a className="text-white hover:underline" href="#">
            Cadastrar
          </a>
        </footer>
      </form>
    </div>
  );
};
