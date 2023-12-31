import Navbar from '@/components/Navbar';
import About from '@/components/About';
import { aboutData } from '@/components/About-data';
import { ProfileForm } from '@/components/profileForm';
import { MainLogo } from '@/components/mainLogo';
import { AboutJob } from '@/components/aboutJob';
import { Differential } from '@/components/differential';
import { Plans } from '@/components/plans';
import { Blog } from '@/components/blog';
import { Footer } from '@/components/footer';

const cardData = [
  {
    image: 'aboutJobImages/Contador.svg',
    href: 'https:www.google.com/',
    altText: 'Contador',
  },
  {
    image: 'aboutJobImages/recHumanos.svg',
    href: 'https:www.google.com/',
    altText: 'Recursos Humanos',
  },
  {
    image: 'aboutJobImages/marketing.svg',
    href: 'https:www.google.com/',
    altText: 'Marketing',
  },
  {
    image: 'aboutJobImages/analise.svg',
    href: 'https:www.google.com/',
    altText: 'Análise',
  },
];

const jobData = [
  {
    image: '/branding.svg',
    href: 'https:www.google.com/',
    altText: 'Branding',
  },
  {
    image: '/criacaoSites.svg',
    href: 'https:www.google.com/',
    altText: 'Criaçao de sites',
  },
  {
    image: '/aberturaEmpresas.svg',
    href: 'https:www.google.com/',
    altText: 'Abertura de empresas',
  },
];

export default function Home() {
  return (
    <main className="flex bg-[url('/images/background.png')] min-h-screen flex-col relative justify-between">
      <div className="items-center">
        <Navbar />
      </div>
      <div className="flex align-middle justify-center mt-[5rem]">
        <MainLogo />
        <ProfileForm />
      </div>

      <About title={aboutData.title} />
      <h1 className="text-purple flex items-center justify-center mt-[8rem] text-6xl font-bold underline">
        O QUE OFERECEMOS?
      </h1>
      <div className="flex justify-center mt-8">
        {cardData.map((card) => (
          <AboutJob {...card} key={card.altText} />
        ))}
      </div>

      <h1 className="text-purple flex items-center justify-center mt-[8rem] text-6xl font-bold underline">
        Serviços adicionais
      </h1>

      <div className="flex justify-center mt-8">
        {jobData.map((card) => (
          <AboutJob {...card} key={card.altText} />
        ))}
      </div>

      <Differential />
      <Plans />
      <div className="bg-gradient-to-b from-orange-100 to-purple ">
        <Blog />
        <Footer />
      </div>
    </main>
  );
}
