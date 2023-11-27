import Image from "next/image";
import { SignInForm } from "../auth/components/sign-in-form";
import backgroundImage from "/public/images/bg-signin.jpg";

export default function Home() {
  return (
    <div className="dark-linear-gradient relative w-screen h-full">
      <Image src={backgroundImage} alt="imagem de fundo" className="opacity-10 " fill />
      <main className="flex min-h-screen flex-col items-center justify-center p-24 max-[600px]:p-6 z-10 relative ">
        <SignInForm />
      </main>
    </div>
  );
}
