import Image from "next/image";
import { SignInForm } from "../auth/components/sign-in-form";
import backgroundImage from "/public/images/bg-signin.jpg";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/auth/next-auth/options";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(nextAuthOptions);

  if (session) {
    redirect("/filmes");
  }

  return (
    <div className="dark-linear-gradient relative w-screen h-full">
      <Image
        src={backgroundImage}
        alt="imagem de fundo"
        className="opacity-10 "
        fill
      />
      <main className="flex min-h-screen flex-col items-center justify-center p-24 max-[600px]:p-6 z-10 relative ">
        <SignInForm />
      </main>
    </div>
  );
}
