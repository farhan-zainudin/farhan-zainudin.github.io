import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://farhan-zainudin.github.io/",
  author: "Farhan Zainudin",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "AstroPaper",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/farhan-zainudin",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
 {
    name: "LinkedIn",
    href: "https://linkedin.com/in/farhan-zainudin",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:paan.zainudin97@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/mamlukzephyr",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  ];
