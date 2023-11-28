import { Button } from "@nextui-org/button"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"


export default function LogoutButton() {
    const router = useRouter()

    const logout = async () => {
        await signOut({
            redirect: true
        })
        router.replace("/")
    }

    return <Button
        onClick={logout}
    >
        Sair
    </Button>
}