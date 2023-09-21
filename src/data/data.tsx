import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background_01.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/hugoarceo.webp';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Hugo Arceo',
  description: 'Resume for Hugo Arceo',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Hugo Arceo.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Orange County based <strong className="text-stone-100">Full Stack Developer</strong>, currently working at{' '}
        <strong className="text-stone-100">AESD</strong> helping build digital platform designed to support our school
        district's educational goals.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I find joy in <strong className="text-stone-100">skateboarding</strong> through parks,
        strategizing over <strong className="text-stone-100">board games</strong>, and immersing myself in the natural
        beauty of Southern California's stunning landscapes.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1bhna7ByOe9mJO0z_REQB4nFM5kX22YXf/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a fun-loving and creative individual with a deep passion for web development. I specialize in building websites and seamlessly connecting APIs to create dynamic online experiences. My comfort zone revolves around JavaScript, React, Alpine, CSS, and Tailwind CSS, while I also have valuable experience with Node, Python, and Django`,
  aboutItems: [
    {label: 'Location', text: 'Irvine, CA', Icon: MapIcon},
    {label: 'Age', text: '38', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Mexican American', Icon: FlagIcon},
    {label: 'Interests', text: 'Skateboarding, Board Games, Pizza', Icon: SparklesIcon},
    {label: 'Study', text: 'California State University Fullerton', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Anaheim Elementary School District', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 4,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'JavaScript',
        level: 9,
      },
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'CSS',
        level: 9,
      },
      {
        name: 'Tailwind CSS',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'MongoDB',
        level: 6,
      },
      {
        name: 'SQL',
        level: 5,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2012 - 2014',
    location: 'California State University Fullerton',
    title: 'Bachelor of Fine Arts (BFA): Graphic Design',
    content: (
      <ul className="ml-4 space-y-2 text-sm">
        <li>
          <strong>Graphic Design Fundamentals:</strong> A strong foundation in the principles of graphic design,
          including layout, composition, color theory, typography, and visual hierarchy.
        </li>
        <li>
          <strong>Digital Proficiency:</strong> Proficiency in using industry-standard design software such as Adobe
          Creative Suite (Photoshop, Illustrator, InDesign) and other digital design tools.
        </li>
        <li>
          <strong>User Experience (UX) Design:</strong> Understanding of UX principles to create user-friendly and
          engaging digital interfaces.
        </li>
      </ul>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2016 - Present',
    location: 'Anaheim Elementary School District',
    title: 'Web Developer & Graphics Specialist',
    content: (
      <ul className="ml-4 space-y-2 text-sm">
        <li>
          <strong>Day-to-Day:</strong> Develop and maintain employee intranet, District website, school websites.
        </li>
        <li>
          <strong>Accomplishments:</strong>{' '}
          <ul>
            <li>Redesigned 23 School Site logos and branding guidelines</li>
            <li>Migrated previous site from Joomla to WordPress</li>
            <li>Integrated Azure SSO for employee intranet</li>
          </ul>
        </li>
        <li>
          <strong>Tech Stack:</strong> WordPress, PHP, Timber, Twig, JavaScript, Alpine JS, Tailwind CSS
        </li>
      </ul>
    ),
  },
  {
    date: '2013 - April 2012',
    location: '48WS',
    title: 'Web Developer',
    content: (
      <ul className="ml-4 space-y-2 text-sm">
        <li>
          <strong>Day-to-Day:</strong> Maintain and build customer website from templates.
        </li>
        <li>
          <strong>Accomplishments:</strong>{' '}
          <ul>
            <li>Converted base template from tables to responsive Bootstrap 3</li>
            <li>Integrated one off e-commerce WordPress sites</li>
          </ul>
        </li>
        <li>
          <strong>Tech Stack:</strong> WordPress, CSS, Bootstrap, jQuery, JavaScript
        </li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/arceoh'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/3147991/harceo'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/hugoarceo/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/hugo_arceo'},
];
