import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="w-full bg-white border-b">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-6">
          <Link href={"/"} className="text-xl font-bold">
            Apple
          </Link>
          <ul className="flex gap-6">
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
