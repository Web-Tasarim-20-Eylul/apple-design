import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const cardData = [
    {
      title: "Apple Intelligence şimdi sizinle.",
      description:
        "En yeni iPhone, iPad ve Mac modellerinde ücretsiz bir yazılım güncellemesiyle hemen deneyebilirsiniz",
      buttons: [
        {
          variant: "default",
          title: "daha fazla bilgi",
        },
      ],
    },
    {
      title: "AirPods Pro 3",
      description: "Çığır açıcı bir Aktif Gürültü Engelleme deneyimi.",
      buttons: [
        {
          variant: "default",
          title: "Daha Fazla Bilgi",
        },
        {
          variant: "outline",
          title: "Satın Alın",
        },
      ],
      image: "/airpods.jpg",
    },
  ];

  return (
    <div>
      {/* HERO BÖLÜMÜ */}
      <div className="bg-black">
        <div className="max-w-sm md:container mx-auto flex flex-col-reverse md:flex-row justify-evenly pt-16">
          <div className="relative h-[50vh] aspect-[420/760]">
            <Image
              src={"/hero-img.jpg"}
              fill
              className="object-contain"
              alt="iphone 17 pro max"
            />
          </div>
          <div className="flex flex-col justify-evenly  text-center md:text-left space-y-6">
            <div>
              <h1 className="font-bold text-4xl text-white">
                Yeni iPhone 17 Pro Max
              </h1>
              <h2 className="text-white text-xl">Gözü Yükseklerde</h2>
            </div>
            <div className="flex justify-center md:justify-end gap-3 pb-8 md:p-0">
              <Button variant={"outline"}>İletişim</Button>
              <Button>Satın Al</Button>
            </div>
          </div>
        </div>
      </div>

      {/* SENCER bölüm 2 */}
      <section className="bg-[#f5f4f7]">
        {/* Yazı kısmı */}
        <div className="py-12">
          <h2 className="text-4xl font-medium text-center">iPhone AIR</h2>
          <p className="text-center text-lg">Hafif, şık, güçlü</p>
        </div>

        <div className="flex justify-center gap-4">
          <Button variant={"outline"}>Detayları Gör</Button>
          <Button>Satın Al</Button>
        </div>

        {/* Resim kısmı */}
        <div className="relative w-full h-[20vh] md:h-[50vh] lg:h-[80vh]">
          <Image
            src={"/i-air.png"}
            fill
            className="object-cover"
            alt="iphone air"
          />
        </div>
      </section>

      {/* 3. BÖLÜM (Grid) */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {cardData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white flex flex-col justify-center aspect-[4/3]"
            >
              <div className="w-xs text-center mx-auto">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <div className="flex gap-4 mx-auto">
                {item.buttons.map((button, idx) => (
                  <Button key={idx} variant={button.variant}>
                    {button.title}
                  </Button>
                ))}
              </div>
              {item.image && (
                <div className="relative w-full h-[400px]">
                  <Image
                    src={item.image}
                    alt="resim"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
