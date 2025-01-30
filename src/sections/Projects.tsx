import portfolio from '@/assets/images/project1.png';
import headlights from '@/assets/images/project2.png';
import airbnb from '@/assets/images/project3.png';
import penny from '@/assets/images/penny.png'
import Image from 'next/image';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { Card } from '@/components/Card';

const portfolioProjects = [
  {
    company: 'Penny',
    year: '2025',
    title: 'Penny',
    results: [
      { title: 'Enormously fast application using Turborepo' },
      { title: 'Provided with features for future AI integration' },
      { title: 'Created for mobile-first design' },
    ],
    link: 'https://penny-production-five.vercel.app/',
    image: penny,
  },
  {
    company: 'MRPL IT INC',
    year: '2024',
    title: 'Calgary Headlights Recycling',
    results: [
      { title: 'Single-page application built with Next.js and Tailwind' },
      { title: 'Showcased products with a clean, modern design' },
      { title: 'Optimized for mobile and desktop devices' },
    ],
    link: 'https://calgary-headlights.vercel.app/',
    image: headlights,
  },
  {
    company: '',
    year: '2024',
    title: 'NextJS Airbnb Clone',
    results: [
      { title: 'Dynamic listings powered by Next.js and Prisma' },
      { title: 'Integrated authentication and booking system' },
      { title: 'Utilized Tailwind for modern and intuitive UI' },
    ],
    link: 'https://github.com/DaniaMasnyi/next14-airbnb-clone',
    image: airbnb,
  },
  {
    company: '',
    year: '2024',
    title: 'NextJS Portfolio',
    results: [
      { title: 'Built with Next.js and Tailwind for optimized performance' },
      { title: 'Fully responsive design for seamless user experience' },
      { title: 'Integrated animations with minimal effort' },
    ],
    link: 'https://github.com/DaniaMasnyi/next-portfolio',
    image: portfolio,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg-py-24">
      <div className="container">
        <div className="flex justify-center ">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          Explore how I’ve turned ideas into high-performance web platforms
        </p>
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="md:pt-12 md:px-10 lg:pt-16 lg:px-20 px-8 pt-8 pb-0 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>✨ I want to see 😍</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-lg"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
