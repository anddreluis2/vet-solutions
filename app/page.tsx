import { FormHero } from "@/components/FormHero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const VetSolutions = "/images/vetsolutions.svg";

  return (
    <>
      <main className="flex bg-[url('/images/background.png')] min-h-screen flex-col relative items-center justify-between">
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <div className="w-2/5">
            <div className="text-center">
              <div className="flex flex-col items-center">
                <Image width={300} height={120} src={VetSolutions} alt="logo" />
              </div>
              <h1 className="text-2xl font-montserrat italic text-white mt-5">
                Transforme os setores administrativos do seu negócio com o apoio
                do BackOffice da Vet Solutions. Organização e eficiência, tudo
                em um só lugar!
              </h1>
            </div>
          </div>
          <div className="w-1/2 ">
            <span className="flex justify-center items-center h-screen">
             <FormHero />
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
