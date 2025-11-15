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
     <div className="bg-white">
  <div className="container mx-auto relative">
    

    <Image
      src={"/maxresdefault.jpg"}
      alt="iPhone Air"
      width={1920}
      height={1080}
      className="w-full h-auto object-contain"/>
    <div className="absolute top-0 left-0 w-full">
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold text-black text-center mt-8">
          iPhone Air
        </div>
        <div className="text-xl text-black text-center mt-4">
          Hafif. Şık. Güçlü.
        </div>
        <div className="mt-6 mb-8">
          <Button>Detayları Gör</Button>
        </div>
      </div>

    </div>
  </div>
</div>
    </div>
  );
}

