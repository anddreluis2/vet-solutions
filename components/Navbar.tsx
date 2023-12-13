import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const logo = "/images/logo.png";
  const VetSolutions = "/images/vetsolutions.svg";
  const links = [
    { text: "HOME", href: "/" },
    { text: "SOBRE NÓS", href: "/sobre-nos" },
    { text: "O QUE OFERECEMOS", href: "/o-que-oferecemos" },
    { text: "NOSSO DIFERENCIAL", href: "/nosso-diferencial" },
    { text: "PLANOS", href: "/planos" },
    { text: "BLOG", href: "/blog" },
  ];

  return (
    <header className="w-[100%] sticky top-0 z-50 px-24 justify-between items-center bg-[#1E1E1E]/75 translucide flex max-w-full h-[80px]">
      <div className="flex gap-2">
        {" "}
        <Image width={48} height={60} src={logo} alt="logo" />
        <Image
          className="mt-0"
          width={200}
          height={80}
          src={VetSolutions}
          alt="Vet Solutions"
        />
      </div>
      <div className="flex text-white gap-8 text-xs justify-center w-[1050px] items-center">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            {link.text}
          </Link>
        ))}
        <Button className="bg-purple text-mint font-semibold hover:underline rounded-full hover:bg-purple/75">
          Entre em contato
        </Button>
      </div>
    </header>
  );
}
