import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { cdn } from "@/helpers/cdn"

const Header = () => {
    return (
        <header className="w-full h-16 shrink-0">
            <div className="max-w-7xl w-full h-full mx-auto px-6 flex items-center justify-between">
                <div className="w-fit h-fit flex items-center gap-2">
                    <Image src={cdn('dm/icons/DM-dark.svg')} width={28} height={28} alt="dm-logo" />
                    <h1 className="text-2xl font-semibold text-muted-foreground">/</h1>
                    <h1 className="text-2xl font-semibold">Docs</h1>
                </div>
                <Button variant='outline'><Link href='https://darkmaterial.space/home'>На главную</Link></Button>
            </div>
        </header>
    )
}

export default Header