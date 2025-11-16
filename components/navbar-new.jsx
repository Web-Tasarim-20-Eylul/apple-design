import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    // <nav className="w-full bg-white/70 sticky top-0 z-10 backdrop-blur-lg">
    <nav className="w-full sticky top-0 z-10 bg-linear-to-r from-black via-purple-700 to-black text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-6">
          <Link href={"/"} className="text-xl font-bold">
            Apple
          </Link>
          <ul className="hidden lg:flex gap-6">
            <Link href={"/products"}>Ürünler</Link>
            <Link href={"/updates"}>Son Güncellemeler</Link>
            <Link href={"/about"}>Hakkımızda</Link>
            <Link href={"/help"}>Yardım</Link>
          </ul>
        </div>
        <div className="flex gap-6">
          <Button variant={"outline"}>Giriş Yap</Button>
          <Button>Kayıt Ol</Button>
        </div>
      </div>
    </nav>
  );
}
