"use client";

import GradientText from '@/components/GradientText';
import LogoLoop from '@/components/LogoLoop';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiVuedotjs,
  SiAngular,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiPhp,
  SiLaravel,
  SiDjango,

  SiFigma,
  SiGraphql,
  SiRedis,
  SiFirebase
} from 'react-icons/si';

const Technologies = () => {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiVuedotjs />, title: "Vue.js", href: "https://vuejs.org" },
    { node: <SiAngular />, title: "Angular", href: "https://angular.io" },
    { node: <SiFlutter />, title: "Flutter", href: "https://flutter.dev" },
    { node: <SiSwift />, title: "Swift", href: "https://swift.org" },
    { node: <SiKotlin />, title: "Kotlin", href: "https://kotlinlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
    { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
    { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
    { node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
 
    { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
    { node: <SiGraphql />, title: "GraphQL", href: "https://graphql.org" },
    { node: <SiRedis />, title: "Redis", href: "https://redis.io" },
    { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com" },
  ];

  return (
    <div className="min-h-[400px] flex items-center justify-center bg-black py-20 px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={5}
              showBorder={false}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold m-4"
            >
              Technologies We Use
            </GradientText>
          </motion.div>
          
          <motion.p 
            className="text-lg mx-auto text-white sm:text-base md:text-lg lg:text-xl font-bold text-center max-w-4xl leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Powered by the latest and most reliable technologies
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full"
        >
          <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={64}
              gap={60}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Technology partners"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;

