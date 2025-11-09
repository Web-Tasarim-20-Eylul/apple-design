import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
      {/* HERO BÖLÜMÜ */}
      <div className="container mx-auto flex justify-evenly pt-16">
        <div className="relative h-[50vh] aspect-[420/760]">
          <Image
            src={"/hero-img.jpg"}
            fill
            className="object-contain"
            alt="iphone 17 pro max"
          />
        </div>
        <div className="flex flex-col justify-evenly">
          <div>
            <h1 className="font-bold text-4xl text-white">
              Yeni iPhone 17 Pro Max
            </h1>
            <h2 className="text-white text-xl">Gözü Yükseklerde</h2>
          </div>
          <div className="flex justify-end gap-3">
            <Button variant={"outline"}>İletişim</Button>
            <Button>Satın Al</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
