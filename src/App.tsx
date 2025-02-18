import React from 'react';
import Header from './component/Header';
import Items from './component/Items';
import Banner from './component/Banner';
import Skills from './component/Skills';
import Project from './component/Project';
import Footer from './component/Footer';

import EcoFermaDonCip from './img/Снимок экрана 2024-03-16 180110.png';
import LoremIpsum_Net from './img/Снимок экрана 2024-03-16 180217.png';
import Mazda from './img/Снимок экрана 2023-12-07 221515.png';
import Qentare from './img/Снимок экрана 2023-12-22 130035.png';
import Transcard from './img/Снимок экрана 2023-12-22 125254.png';
import Explorer from './img/Снимок экрана 2023-12-07 221941.png';
import OilProduct from './img/Снимок экрана 2023-12-07 222404.png';
import Bonus from './img/Снимок экрана 2023-12-07 230023.png';
import PorscheModels from './img/Снимок экрана 2023-12-07 224418.png'; 
import ApertureStudios from './img/Снимок экрана 2023-12-17 232028.png';
import LetsDispatch from './img/Снимок экрана 2023-12-17 232206.png';
import CreativeScroll from './img/Снимок экрана 2023-12-17 232349.png';
import BeautifulWorld from './img/Снимок экрана 2023-12-17 232523.png';
import FairyForest from './img/Снимок экрана 2023-12-17 232658.png';
import Dashboard from './img/Снимок экрана 2023-12-27 221628.png';
import MiamiSwiper from './img/Снимок экрана 2024-05-28 212432.png';
import PhotographyPortfolio from './img/Снимок экрана 2024-05-28 213046.png';
import NBU from './img/Снимок экрана 2024-05-28 213449.png';
import applewatch from './img/Снимок экрана 2024-05-28 213230.png';
import nokoSocial from './img/Снимок экрана 2024-05-28 214745.png';
import Cyberpunk from './img/Cyberpunk.png';
import CircleParallax from './img/Circle-Parallax.png';
import Cresco from './img/Cresco.png';
import Agora from './img/agora.png';

import Photo from './img/photo.png';
import Linkedin from './img/icons8-linkedin.svg';
import GitHub from './img/icons8-github.svg';
import Gmail from './img/icons8-gmail.svg';
import Astro from './img/icons8-astro.svg';
import TypeScript from './img/icons8-typescript.svg';
import JavaScript from './img/icons8-js.svg';
import AutoCad from './img/icons8-autocad.svg';
import Bootstrap from './img/icons8-bootstrap.svg';
import Css from './img/icons8-css3.svg';
import Reacts from './img/icons8-react.svg';
import Sass from './img/icons8-sass.svg';
import Tailwind from './img/icons8-tailwindcss.svg';
import Sketchup from './img/icons8-google-sketchup.svg';
import Hubspot from './img/hubspot-1.svg';
import Azure from './img/icons8-azure.svg';
import HTML from './img/icons8-html-logo.svg'
import Telegram from './img/telegram.svg';
import WhatsApp from './img/wthatapp.svg';
import { motion, useScroll } from "framer-motion";

const App: React.FC = () => {

  const items = [
    {
      number: '01',
      title: 'Arama R (May 2018 - Nov.2022)',
      subtitle: 'Tehnolog developer: Engineering & Project Management',
    },
    {
      number: '02',
      title: 'SRL TARASENCO VLADIMIR (freelance) (Nov. 2021 - Nov. 2022)',
      subtitle: 'Frontend Developer: Implementation of projects & Development & user interface & Web development',
    },
    {
      number: '03',
      title: 'Let`s Dispatch (Nov. 2022 - March 2023)',
      subtitle: 'Web Developer: Implementation of projects & Development & user interface & Web development',
    },
    {
      number: '04',
      title: 'Agile Partners (March 2023 - present)',
      subtitle: 'Web Developer: Implementation of projects & Development & user interface & Web development',
    },
  ];

  const skillsData = [
    {
      icon: Astro,
      title: 'Astro',
      subtitle: 'Astro powers the world`s fastest websites, client-side web apps, dynamic API endpoints, and everything in-between. ',
    },
    {
      icon: TypeScript,
      title: 'TypeScript',
      subtitle: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale',
    },
    {
      icon: JavaScript,
      title: 'JavaScript',
      subtitle: 'JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions.',
    },
    {
      icon: AutoCad,
      title: 'AutoCad',
      subtitle: 'Power your teams’ creativity with the automation, collaboration, and machine-learning features of AutoCAD® software.',
    },
    {
      icon: Bootstrap,
      title: 'Bootstrap',
      subtitle: 'Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.',
    },
    {
      icon: Css,
      title: 'CSS',
      subtitle: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
    },
    {
      icon: Reacts,
      title: 'React',
      subtitle: 'The library for web and native user interfaces',
    },
    {
      icon: Sass,
      title: 'Sass',
      subtitle: 'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
    },
    {
      icon: Tailwind,
      title: 'Tailwind',
      subtitle: 'Rapidly build modern websites without ever leaving your HTML.',
    },
    {
      icon: Sketchup,
      title: 'Sketchup',
      subtitle: 'SketchUp is a suite of subscription products that include SketchUp Pro Desktop, a 3D modeling computer-aided design (CAD) program for a broad range of drawing and design applications — including architectural, interior design, industrial and product design, landscape architecture, civil and mechanical engineering, theater, film and video game development.',
    },
    {
      icon: Hubspot,
      title: 'Hubspot',
      subtitle: 'Software that`s powerful, not overpowering. Seamlessly connect your data, teams, and customers on one customer platform that grows with your business.',
    },
    {
      icon: Azure,
      title: 'Azure',
      subtitle: 'Microsoft Azure, formerly known as Windows Azure, is Microsoft`s public cloud computing platform. It provides a broad range of cloud services, including compute, analytics, storage and networking. Users can pick and choose from these services to develop and scale new applications or run existing applications in the public cloud.',
    },
    {
      icon: HTML,
      title: 'HTML',
      subtitle: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
    },
  ];

  const projectsData = [
    {
      href: 'https://www.crescoestate.com/georgia/en-US',
      img: Cresco,
      title: 'Cresco',
    },
    {
      href: 'https://agora.md/',
      img: Agora,
      title: 'Agora',
    },
    {
      href: 'https://valtar1999.github.io/EcoFerma-DonCip-main/',
      img: EcoFermaDonCip,
      title: 'EcoFermaDonCip',
    },
    {
      href: 'https://www.transcard.com/',
      img: Transcard,
      title: 'Transcard',
    },
    {
      href: 'https://app.qentare.com/',
      img: Qentare,
      title: 'Qentare',
    },
    {
      href: 'https://valtar1999.github.io/Mazda/',
      img: Mazda,
      title: 'Mazda',
    },
    {
      href: 'https://valtar1999.github.io/Porsche-Models/',
      img: PorscheModels,
      title: 'Porsche-Models',
    },
    {
      href: 'https://valtar1999.github.io/Aperture-Studios/',
      img: ApertureStudios,
      title: 'Aperture-Studios',
    },
    {
      href: 'https://valtar1999.github.io/Creative-scroll/',
      img: CreativeScroll,
      title: 'Creative-scroll',
    },
    {
      href: 'https://valtar1999.github.io/Beautiful-World/',
      img: BeautifulWorld,
      title: 'Beautiful-World',
    },
    {
      href: 'https://valtar1999.github.io/Cyberpunk-2077/',
      img: Cyberpunk,
      title: 'Cyberpunk 2077',
    },
    {
      href: 'https://valtar1999.github.io/Circle-Parallax/',
      img: CircleParallax,
      title: 'CircleParallax',
    },
    {
      href: 'https://valtar1999.github.io/Fairy-Forest/',
      img: FairyForest,
      title: 'Fairy-Forest',
    },
    {
      href: 'https://valtar1999.github.io/Miami_Swiper/',
      img: MiamiSwiper,
      title: 'Miami_Swiper',
    },
    {
      href: 'https://valtar1999.github.io/Photography_Portfolio/',
      img: PhotographyPortfolio,
      title: 'Photography Portfolio',
    },
    {
      href: 'https://valtar1999.github.io/NBU/',
      img: NBU,
      title: 'NBU',
    },
    {
      href: 'https://valtar1999.github.io/apple-watch/',
      img: applewatch,
      title: 'APPLE WATCH',
    },
    {
      href: 'https://valtar1999.github.io/Social-Media/',
      img: nokoSocial,
      title: 'nokoSocial',
    },
    {
      href: 'https://valtar1999.github.io/Dashboard/',
      img: Dashboard,
      title: 'Dashboard',
    },
    {
      href: 'https://valtar1999.github.io/LoremIpsum.Net/',
      img: LoremIpsum_Net,
      title: 'LoremIpsum.Net',
    },
    {
      href: 'https://valtar1999.github.io/Explorer/',
      img: Explorer,
      title: 'Explorer',
    },
    {
      href: 'https://valtar1999.github.io/Oil-product/',
      img: OilProduct,
      title: 'Oil-product',
    },
    {
      href: 'https://valtar1999.github.io/Bonus/',
      img: Bonus,
      title: 'Bonus',
    },
    {
      href: 'https://valtar1999.github.io/Let-s-dispatch/',
      img: LetsDispatch,
      title: 'Let`s-dispatch',
    },
  ];

  const link = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/vladislav-tarna-95a81a249/',
      text: 'Vladislav Tarna',
    },
    {
      icon: GitHub,
      href: 'https://github.com/ValTar1999',
      text: 'ValTar1999',
    },
    {
      icon: Gmail,
      href: 'mailto:www.vladtarna25@gmail.com',
      text: 'www.vladtarna25@gmail.com',
    },
    {
      icon: Telegram,
      href: 'https://t.me/+37379779557',
      text: 'Telegram',
    },
    {
      icon: WhatsApp,
      href: 'https://wa.me/+37379779557',
      text: 'WhatsApp',
    },
  ]

  const { scrollYProgress } = useScroll();


  return (
    <div className="">
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-yellow-500/80 z-50 origin-top-left"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="fixed bottom-8 right-4 md:right-10 lg:right-16 z-50">
        <a href="#Footer">
          <svg className="animate-bounce w-10 h-10 xl:w-12 xl:h-12 text-yellow-500/80 border border-yellow-500/80 rounded-full p-1 backdrop-opacity-10 backdrop-invert bg-yellow/30" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
      <Header 
        foto={Photo} 
        title="I'm Tarna Vladislav. A Web Developer." 
        subtitle="If you have a great project that needs some amazing skills, I’m your guy." 
      />
      <Items items={items} />
      <Banner
        title='Philosophy & values'
        subtitle='Logical thinking === good software'
      />
      <Skills skills={skillsData} />
      <Project projects={projectsData} />
      <div id="Footer">
        <Footer items={link} />
      </div>
    </div>
  );
};

export default App;