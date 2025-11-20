'use client';

import React, { useCallback, useMemo } from 'react';
import { useForm } from '@formspree/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { TiArrowSortedUp } from 'react-icons/ti';
import { FaCode, FaTools } from 'react-icons/fa';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";


type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  status: string;
  github?: string;
  demo?: string;
  tech: string[];
};

const SectionHeading: React.FC<{ title: string; className?: string }> = ({ title, className }) => (
  <h2
    className={`text-4xl font-bold text-left mb-2 text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 animate-text-glow ${className || ''
      }`}
  >
    {title}
  </h2>
);

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; note?: string; accent?: string }> = ({
  icon,
  title,
  desc,
  note,
  accent = '',
}) => (
  <div className="flex flex-col md:flex-row items-start gap-6 bg-linear-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 shadow-lg p-6 group hover:shadow-xl transition-all duration-500">
    <div className={`${accent} text-4xl`}>{icon}</div>
    <div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 mb-2">{desc}</p>
      {note && <p className="text-sm text-slate-400 italic">{note}</p>}
    </div>
  </div>
);

const SkillGrid: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
    {items.map((s) => (
      <li
        key={s}
        className="px-4 py-2 bg-slate-800/60 border border-slate-700 rounded-lg text-sm text-slate-200 hover:bg-slate-700/70 transition"
      >
        {s}
      </li>
    ))}
  </ul>
);

const ProjectCard: React.FC<{ p: Project }> = ({ p }) => (
  <article
    key={p.id}
    aria-labelledby={`${p.id}-title`}
    className="relative bg-slate-800/60 border border-slate-700 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
    role="listitem"
  >
    <div
      className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full shadow-md ${p.status === 'En cours'
        ? 'bg-yellow-500 text-black'
        : p.status === 'Terminé'
          ? 'bg-green-500 text-black'
          : 'bg-slate-600 text-white'
        }`}
      aria-hidden="true"
    >
      {p.status}
    </div>

    <figure className="m-0">
      <Image
        src={p.image}
        alt={p.imageAlt}
        width={600}
        height={360}
        className="w-full h-44 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={false}
      />
      <figcaption className="sr-only">{p.title} — {p.description}</figcaption>
    </figure>

    <div className="p-4">
      <h3 id={`${p.id}-title`} className="text-xl font-semibold mb-2">
        {p.title}
      </h3>
      <p className="text-slate-300 text-sm mb-3">{p.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {p.tech.map((t) => (
          <span
            key={t}
            className="text-xs bg-slate-700/60 border border-slate-700 rounded-full px-2 py-1 text-slate-200"
            aria-hidden="true"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <Link
          href={p.github || '#'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Voir le code source de ${p.title} sur GitHub`}
          className="inline-flex items-center justify-center px-3 py-2 bg-slate-700 hover:bg-slate-600 text-sm rounded-md border border-slate-600 transition"
        >
          GitHub
        </Link>
        <Link
          href={p.demo || '#'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ouvrir la démo de ${p.title}`}
          className="inline-flex items-center justify-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-sm rounded-md transition"
        >
          Démo
        </Link>
      </div>
    </div>
  </article>
);

const ContactForm: React.FC<{ onSubmit: React.FormEventHandler<HTMLFormElement>; submitting: boolean }> = ({ onSubmit, submitting }) => (
  <div className="max-w-xl w-full mx-auto mt-8 bg-slate-900/70 border border-slate-700 rounded-xl shadow-lg p-8">
    <form className="space-y-6 text-left" onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="name" className="block mb-2 font-medium">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={submitting}
          className="cursor-pointer px-10 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded font-medium shadow hover:brightness-105 transition disabled:opacity-60"
        >
          {submitting ? 'Envoi...' : 'Envoyer'}
        </button>
      </div>
    </form>
  </div>
);

const Home: React.FC = () => {
  const [state, handleSubmit] = useForm('mqawjolo');

  const services = useMemo(
    () => [
      {
        icon: <FaCode className="text-blue-400 group-hover:animate-glitch" />,
        title: 'Développement Web',
        desc: 'Création de sites web réactifs et performants utilisant les dernières technologies.',
        note: 'Frameworks : React, Next.js, Tailwind, animations personnalisées.',
      },
      {
        icon: <MdOutlineTipsAndUpdates className="text-pink-400 group-hover:animate-glitch" />,
        title: 'Maintenance & Mises à Jour',
        desc: "Services de maintenance pour assurer la sécurité et la performance continues de vos sites web.",
        note: 'mises à jour régulières, sauvegardes, optimisation des performances.',
      },
      {
        icon: <FaTools className="text-purple-400 group-hover:animate-glitch" />,
        title: 'Systèmes Créatifs',
        desc: "Configuration et optimisation d’environnements de travail pour une créativité fluide.",
        note: 'Windows, Linux, outils open-source, automatisation.',
      },
    ],
    []
  );

  const frontendSkills = useMemo(
    () => ['HTML5/CSS3', 'SCSS', 'JavaScript', 'VueJs', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Canva'],
    []
  );

  const backendSkills = useMemo(() => ['Laravel', 'PHP', 'MySQL', 'SQL', 'Postgres', 'Authentication'], []);
  const tools = useMemo(() => ['VS Code', 'Git & GitHub', 'Linux', 'Windows', 'Docker'], []);

  const projects = useMemo<Project[]>(
    () => [
      {
        id: 'portfolio',
        title: 'Portfolio professionnel',
        description: "Site vitrine mettant en avant compétences, projets et expériences. Focus sur performance et accessibilité.",
        image: '/portfolio.png',
        imageAlt: "Capture d'écran du portfolio professionnel",
        status: 'Terminé',
        github: 'https://github.com/A-kim4/kimportfolio',
        demo: '#',
        tech: ['React', 'Next.js', 'Tailwind'],
      },
      {
        id: 'ecommerce',
        title: 'Plateforme e‑commerce',
        description: 'Plateforme complète avec gestion produits, panier et intégration de paiements sécurisés.',
        image: '/ecommerce.jpeg',
        imageAlt: 'Interface d’un site e‑commerce',
        status: 'En cours',
        github: '#',
        demo: '#',
        tech: ['HTML5', 'SCSS', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL'],
      },
      {
        id: 'catchme',
        title: 'Mini‑jeu JavaScript',
        description: "Mini‑jeu interactif où le joueur doit attraper un bouton en mouvement. Idéal pour démontrer logique et animations.",
        image: '/catchme.png',
        imageAlt: 'Illustration du mini‑jeu Catch Me',
        status: 'Prototype',
        github: 'https://github.com/A-kim4/catch-me-button',
        demo: 'https://shimmering-banoffee-b302bf.netlify.app/',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
      },
      {
        id: 'QuizzApp',
        title: 'Application de Quizz',
        description: "Application web proposant des quizz interactifs avec scores et feedback en temps réel.",
        image: '/quizapp.jpeg',
        imageAlt: "Capture d'écran de l'application de quizz",
        status: 'En cours',
        github: 'https://github.com/A-kim4/quiz-app',
        demo: '#',
        tech: ['VueJs', 'TailwindCss', 'Laravel', 'MySQL'],
      },
    ],
    []
  );

  const scrollToTop = useCallback(() => {
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="p-8 bg-green-600 text-white rounded-lg shadow-lg max-w-xl">
            <h2 className="text-2xl font-bold mb-2">Merci !</h2>
            <p>Votre message a bien été envoyé. Je vous répondrai dès que possible.</p>
            <div className="mt-4">
              <button onClick={scrollToTop} className="px-4 py-2 bg-white text-green-600 rounded">Haut</button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />

      <main className="flex-1 space-y-0">
        {/* Home */}
        <section
          id="home"
          className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-linear-to-br from-gray-700 to-gray-800 text-center md:text-left px-6 gap-16"
        >
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-white font-poppins">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 animate-text-glow">
              bienvenue dans mon monde créatif
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-6 leading-relaxed">
              Plongez dans mon univers. Je crée des interfaces réactives, des œuvres numériques captivantes,
              et des systèmes optimisés pour un flux créatif sans limites.
              <br />
              <span className="text-blue-400 font-semibold">Développement web</span>,{' '}
              <span className="text-pink-400 font-semibold">art numérique</span> et{' '}
              <span className="text-purple-400 font-semibold">configurations sur mesure</span> — réalisons vos idées ensemble.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:brightness-110 active:scale-95 transition duration-300"
            >
              Me contacter
            </a>
          </div>

          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border border-slate-700 group transition-transform duration-500 hover:scale-105">
              <Image
                src="/profil.png"
                alt="Photo de profil"
                width={800}
                height={800}
                className="rounded-full object-cover w-full h-full"
                priority
              />
              <div className="absolute inset-0 rounded-full pointer-events-none group-hover:animate-glitch-rgb border-2 border-blue-400 opacity-30 blur-sm"></div>
              <div className="absolute inset-0 rounded-full pointer-events-none group-hover:animate-glitch-rgb border-2 border-pink-500 opacity-30 blur-sm delay-100"></div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="min-h-screen flex flex-col justify-center bg-linear-to-br from-gray-800 via-gray-900 to-black text-white px-6 py-20 gap-12">
          <div className="max-w-4xl w-full mx-auto">
            <SectionHeading title="Mes Services" />
            <hr className="w-24 border-t-2 border-blue-500 mb-6" />
            <p className="text-slate-300 text-lg leading-relaxed">
              Mon approche allie technique et esthétique pour créer des solutions sur mesure. Chaque service est pensé pour amplifier votre identité numérique, avec une touche artistique et une optimisation approfondie.
            </p>
          </div>

          <div className="flex flex-col gap-12 max-w-4xl w-full mx-auto mt-8">
            {services.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} note={s.note} />
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" role="region" aria-labelledby="about-heading" className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-700 to-gray-800 text-white px-6 py-20">
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 id="about-heading" className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 animate-text-glow">
                À propos de moi
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Je m'appelle <span className="font-semibold text-blue-400">MALALANIAINA Antonio Michael</span>, un passionné de technologie et d'art numérique. Avec une expertise en développement web, design UX/UI et configuration de systèmes, je crée des expériences numériques uniques qui allient esthétique et fonctionnalité.
              </p>
              <p className="text-slate-300 mb-4">
                J’aime expérimenter avec de nouveaux outils, optimiser des workflows et collaborer pour transformer des idées en projets concrets.
              </p>
              <ul className="flex flex-wrap gap-3">
                <li className="px-3 py-1 bg-slate-800/60 border border-slate-700 rounded-full text-sm text-slate-200">React / Next.js</li>
                <li className="px-3 py-1 bg-slate-800/60 border border-slate-700 rounded-full text-sm text-slate-200">UI / UX Design</li>
                <li className="px-3 py-1 bg-slate-800/60 border border-slate-700 rounded-full text-sm text-slate-200">Accessibilité</li>
                <li className="px-3 py-1 bg-slate-800/60 border border-slate-700 rounded-full text-sm text-slate-200">Automatisation</li>
              </ul>
              <div className="flex items-center gap-4 mt-4">
                <a href="#contact" className="inline-block px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow hover:brightness-105 transition">Discuter d’un projet</a>
                <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 underline hover:text-white transition">Télécharger le CV</a>
              </div>
            </div>

            <figure className="flex justify-center md:justify-end">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-2xl border border-slate-700 group transition-transform duration-500 hover:scale-105">
                <Image src="/télécharger.png" alt="Illustration art & développement" width={800} height={800} className="rounded-xl object-cover w-full h-full" priority={false} />
                <div className="absolute inset-0 rounded-xl pointer-events-none group-hover:animate-glitch-rgb border-2 border-blue-400 opacity-30 blur-sm"></div>
                <div className="absolute inset-0 rounded-xl pointer-events-none group-hover:animate-glitch-rgb border-2 border-pink-500 opacity-30 blur-sm delay-100"></div>
              </div>
              <figcaption className="sr-only">Illustration — fusion technologie & art</figcaption>
            </figure>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="min-h-screen flex flex-col justify-center bg-linear-to-br from-gray-800 via-gray-900 to-black text-white px-6 py-20">
          <div className="max-w-4xl w-full mx-auto">
            <div className="max-w-4xl w-full mx-auto mb-12">
              <SectionHeading title="Compétences Frontend" />
              <hr className="w-24 border-t-2 border-blue-500 mb-6" />
              <p className="text-slate-300 text-lg leading-relaxed mb-6">Expertise en développement d’interfaces utilisateur réactives et esthétiques pour des expériences web engageantes.</p>
              <SkillGrid items={frontendSkills} />
            </div>

            <div className="max-w-4xl w-full mx-auto mb-12">
              <SectionHeading title="Compétences Backend" />
              <hr className="w-24 border-t-2 border-blue-500 mb-6" />
              <p className="text-slate-300 text-lg leading-relaxed mb-6">Solides compétences en développement backend pour des applications performantes et sécurisées.</p>
              <SkillGrid items={backendSkills} />
            </div>

            <div className="max-w-4xl w-full mx-auto">
              <SectionHeading title="Outils & Environnements" />
              <hr className="w-24 border-t-2 border-blue-500 mb-6" />
              <p className="text-slate-300 text-lg leading-relaxed mb-6">Expertise dans la configuration et l’optimisation d’environnements de travail pour une créativité fluide.</p>
              <SkillGrid items={tools} />
            </div>

            <div className="max-w-4xl w-full mx-auto mt-12">
              <SectionHeading title="Qualités Personnelles" />
              <hr className="w-24 border-t-2 border-blue-500 mb-6" />
              <p className="text-slate-300 text-lg leading-relaxed">Curiosité, adaptabilité et passion pour l’apprentissage continu. Je m’efforce de rester à la pointe des tendances technologiques et artistiques pour offrir des solutions innovantes et efficaces.</p>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section
          id="portfolio"
          className="min-h-screen flex flex-col justify-center bg-linear-to-br from-gray-800 via-gray-900 to-black text-white px-6 py-20"
        >
          <div className="max-w-4xl w-full mx-auto">
            <SectionHeading title="Projets Réalisés" />
            <hr className="w-24 border-t-2 border-blue-500 mb-6" />
            <p className="text-slate-300 text-lg leading-relaxed">
              Découvrez une sélection de projets où j'ai combiné développement web,
              design et optimisation pour créer des expériences numériques uniques.
            </p>
          </div>

          {/* Carrousel */}
          <div className="max-w-6xl w-full mx-auto mt-12 p-4">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{ enabled: true }}
              pagination={{
                clickable: true
              }}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 },
              }}
              className="rounded-xl shadow-lg"
            >
              {projects.map((p) => (
                <SwiperSlide key={p.id}>
                  <ProjectCard p={p} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </section>


        {/* Contact */}
        <section id="contact" className="min-h-screen flex flex-col justify-center bg-linear-to-br from-gray-800 via-gray-900 to-black text-white px-6 py-20">
          <div className="max-w-4xl w-full mx-auto text-center">
            <SectionHeading title="Contactez-moi" />
            <hr className="w-24 border-t-2 border-blue-500 mb-6 mx-auto" />
            <p className="text-slate-300 text-lg leading-relaxed">Prêt à donner vie à vos idées ? Que vous ayez un projet en tête ou simplement envie de discuter, n’hésitez pas à me contacter. Je suis toujours ouvert aux nouvelles opportunités et collaborations.</p>
            <div className="flex flex-col gap-1 space-x-1 mt-4 text-slate-400">
              <span>(+261) 38 54 713 75</span>
              <span>IVE 71 Bis Ambodimita Ambohimanarina</span>
              <span>niaina2kim@gmail.com</span>
            </div>
          </div>

          <ContactForm onSubmit={handleSubmit} submitting={state.submitting} />
        </section>
      </main>

      <Footer />

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-6 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 animate-fade-in"
        aria-label="Scroll to top"
      >
        <TiArrowSortedUp size={28} />
      </button>
    </div>
  );
};

export default Home;
