import { ReactNode } from "react"
import { getServerSession } from "next-auth"
import { nextAuthOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { Navbar } from "@/components/navbar"
import Link from "@nextui-org/link"

interface PrivateLayoutProps {
    children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
    const session = await getServerSession(nextAuthOptions)

    if (!session) {
        redirect("/")
    }

    return (
        <div className="relative flex flex-col items-center justify-center h-full">
            <Navbar />
            {children}
            <footer className="w-full flex items-center justify-center py-3 mt-auto">
                <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://github.com/lcscamacho"
                    title="github lucas"
                >
                    <span className="text-default-600">Powered by</span>
                    <p className="text-primary">@Lucas Camacho</p>
                </Link>
            </footer>
        </div>
    )
}