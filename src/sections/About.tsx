'use client';

import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import bookImage from '@/assets/images/book-cover.png';
import Image from 'next/image';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import { CardHeader } from '@/components/CardHeader';
import { ElementType, useRef } from 'react';
import { ToolboxItems } from '@/components/ToolboxItems';
import { motion } from 'framer-motion';

const toolboxItems: { title: string; iconType: ElementType }[] = [
  {
    title: 'Javascript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: 'GYM',
    emoji: '🏋',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Reading',
    emoji: '📖',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Music',
    emoji: '🎧',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Movies',
    emoji: '🍿',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Coffee Brew',
    emoji: '☕️',
    left: '35%',
    top: '65%',
  },
  {
    title: 'Basketball',
    emoji: '🏀️',
    left: '55%',
    top: '25%',
  },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <Card className="h-[320px] md:col-span-2">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <Card className="h-[320px] md:col-span-3 p-0 flex flex-col">
              <CardHeader
                className="px-6 py-6"
                title="Beyond The Code"
                description="Explore my interests and hobbies"
              />
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute shadow-lg"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-2">
              <CardHeader title="Education" description="" />
              <div className="px-6 mt-[-2%] md:mt-[-12%] lg:mt-[-2%] space-y-4">
                <p className="font-semibold text-lg text-emerald-300">
                  Vasyl Stefanyk Precarpathian National University
                </p>
                <ul className="list-disc list-inside text-white/80 leading-relaxed">
                  <li>
                    <a
                      href="https://www.udemy.com/course/nextjs-react-the-complete-guide/?couponCode=BFCPSALE24"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-sky-400 hover:underline"
                    >
                      Next.js 15 & React - The Complete Guide
                    </a>{' '}
                    - Udemy
                  </li>
                  <li>
                    <a
                      href="https://www.udemy.com/course/typescript-the-complete-developers-guide/?couponCode=BFCPSALE24"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-sky-400 hover:underline"
                    >
                      Typescript: The Complete Developers Guide
                    </a>{' '}
                    - Udemy
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
