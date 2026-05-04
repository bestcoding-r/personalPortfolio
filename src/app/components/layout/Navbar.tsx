import Image from "next/image";
import logo from '../../../../public/images/logo.png'

export default function Navbar() {
    return (
        <nav>
        <div className="lg:w-[140px] lg:h-[80px]">
            <Image src={logo} alt="logo" className="w-full h-full"/>
        </div>
        </nav>
    )
}