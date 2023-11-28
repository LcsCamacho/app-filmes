"use client";
import { Button } from "@nextui-org/button"
import { ColorScale, colors } from "@nextui-org/theme";
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export type ColorsNextUi = "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined


export default function LogoutButton({ className, color }: {
    className?: string;
    color?: ColorsNextUi;
}) {
    const router = useRouter()

    const logout = async () => {
        await signOut({
            redirect: true
        })
        router.replace("/")
    }

    return <Button
        className={className} color={color} onClick={logout}
    >
        Sair
    </Button>
}