import Link from "next/link"


function Footer() {
  return (
    <footer className="shadow-pink-100 py-6 bg-fuchsia-900-900">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link className="text-cyan-900 text-3xl" href={'/'}>Webim.uz</Link>
            <Link className="text-xl" href={"/about"}>About us</Link>
            <Link className="text-xl" href={"/contact"}>Contact Us</Link>
            <Link  href={"https://business.google.com/en-all/google-ads/"}>ADs</Link>
          </div>
          
         
        </div>
    </footer>
  )
}

export default Footer
