"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logo = "/images/Logo.svg";
  const VetSolutions = "/images/vetsolutions.svg";
  // const links = [
  // { text: "HOME", href: "/" },
  // { text: "SOBRE NÓS", href: "/sobre-nos" },
  // { text: "O QUE OFERECEMOS", href: "/o-que-oferecemos" },
  // { text: "NOSSO DIFERENCIAL", href: "/nosso-diferencial" },
  // { text: "PLANOS", href: "/planos" },
  // { text: "BLOG", href: "/blog" },
  // ];

  return (
    <header className="top-0 sticky flex items-center justify-between bg-[#1E1E1E]/75 h-[80px] px-4 md:px-24">
      {/* Ícone do Hambúrguer */}
      <div
        className="md:hidden ml-5"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg viewBox="0 0 100 80" width="40" height="40" fill="#FFFFFF">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </div>

      {/* Logo - Centralizado*/}
      <div className="flex-grow md:flex md:justify-center md:flex-grow-0">
        <Link href="/" className="flex justify-center">
          <Image width={48} height={60} src={logo} alt="logo" />
          <Image
            width={200}
            height={80}
            src={VetSolutions}
            alt="vetSolutions"
          />
        </Link>
      </div>

      {/* Links da Navbar */}
      <div className="hidden md:flex text-white gap-8 text-xs justify-end items-center flex-grow">
        {/* {links.map((link, index) => ( */}
        <a>
          <span className="cursor-pointer"></span>
        </a>
        {/* ))} */}
        <Button
          onClick={() => window.open("https://wa.link/l0y3zd")}
          className="bg-purple text-mint font-semibold hover:underline rounded-full hover:bg-purple/75"
        >
          Entre em contato
        </Button>
      </div>

      {/* Sidebar para Mobile */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-[#1E1E1E]/75 p-4 w-64 h-full md:hidden z-50`}
        // ref={ref}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-white text-3xl"
        >
          × 
        </button>
        <div className="flex flex-col text-white space-y-4 mt-10">
          {/* {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <span className="py-2 text-lg cursor-pointer">{link.text}</span>
            </Link>
          ))} */}
        </div>
      </div>
    </header>
  );
}
