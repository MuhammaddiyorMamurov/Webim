
import { House } from "lucide-react"
import Link from "next/link"

const navLinks =[
    {
        id:1,
        href:"/about",
        title:"About"
    },
    {
        id:2,
        href:"/contact",
        title:"Contact"
    },
]

function Header() {
    
  return (
    <header className="shadow-md py-6">
        <div className="container flex items-center justify-between">
            <Link href={'/'}><House/></Link>
            <nav>
                <ul className="flex items-center gap-4">
                    {navLinks.map((l)=>{
                        return (
                            <li key={l.id}>
                                <Link href={l.href}>
                                {l.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
