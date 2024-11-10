const links = [
  {
    name: 'Angular',
    description: 'One framework. Mobile & desktop.',
    url: 'https://angular.io',
    icon: 'https://angular.dev/assets/icons/apple-touch-icon.png',
    tags: ['Frontend', 'Angular'],
  },
  {
    name: 'AnalogJs',
    description: 'The fullstack Angular meta-framework',
    url: 'https://analogjs.org/',
    icon: 'https://analogjs.org/img/favicon.ico',
    tags: ['Frontend', 'Angular', 'Meta Framework'],
  },
  {
    name: 'NextJS',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org/',
    icon: 'https://nextjs.org/favicon.ico',
    tags: ['Frontend', 'React', 'Meta Framework'],
  },
  {
    name: 'Nuxt',
    description: 'The Intuitive Vue Framework',
    url: 'https://nuxt.com/',
    icon: 'https://nuxt.com/icon.png',
    tags: ['Frontend', 'Vue', 'Meta Framework'],
  },
  {
    name: 'Qwik',
    description: 'Deliver instant apps at scale',
    url: 'https://qwik.dev/',
    icon: 'https://qwik.dev/favicons/favicon.svg',
    tags: ['Frontend', 'Qwik'],
  },
  {
    name: 'QwikCity',
    description: 'Qwik Metaframework',
    url: 'https://qwik.dev/docs/qwikcity',
    icon: 'https://qwik.dev/favicons/favicon.svg',
    tags: ['Frontend', 'Qwik', 'Meta Framework'],
  },
  {
    name: 'React',
    description: 'The library for web and native user interfaces',
    url: 'https://react.dev',
    icon: 'https://react.dev/favicon-32x32.png',
    tags: ['Frontend', 'React'],
  },
  {
    name: 'Remix',
    description:
      'Focused on web standards and modern web app UX, you’re simply going to build better websites',
    url: 'https://remix.run/',
    icon: 'https://remix.run/favicon-32.png',
    tags: ['Frontend', 'React', 'Meta Framework'],
  },
  {
    name: 'SolidJS',
    description:
      'Simple and performant reactivity for building user interfaces.',
    url: 'https://www.solidjs.com',
    icon: 'https://www.solidjs.com/img/favicons/favicon-32x32.png',
    tags: ['Frontend', 'SolidJS'],
  },
  {
    name: 'SolidStart',
    description: 'Fine-grained reactivity goes fullstack',
    url: 'https://start.solidjs.com/',
    icon: 'https://start.solidjs.com/favicon.ico',
    tags: ['Frontend', 'SolidJS', 'Meta Framework'],
  },
  {
    name: 'Vue',
    description: 'The Progressive JavaScript Framework',
    url: 'https://vuejs.org',
    icon: 'https://vuejs.org/logo.svg',
    tags: ['Frontend', 'Vue'],
  },
  {
    name: 'Vite',
    description: 'The Build Tool for the Web',
    url: 'https://vite.dev/',
    icon: 'https://vite.dev/logo.svg',
    tags: ['Frontend', 'Vite', 'Build Tool'],
  },
  {
    name: 'Vitest',
    description: 'Next Generation Testing Framework',
    url: 'https://vitest.dev',
    icon: 'https://vitest.dev/logo.svg',
    tags: ['Frontend', 'Testing', 'Quality'],
  },
];

export interface Link {
  name: string;
  description: string;
  url: string;
  icon: string;
  tags: Tag[];
}

export interface Tag {
  name: string;
  url: string;
}

export const Links: Link[] = links
  .map((link) => ({
    name: link.name,
    description: link.description,
    url: link.url,
    icon: link.icon,
    tags: link.tags.map((tag) => ({ name: tag, url: `/bookmarks/${tag}` })),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const LinksWithTag = (tag: string): Link[] => {
  return links
    .filter((link) => link.tags.includes(tag))
    .map((link) => ({
      name: link.name,
      description: link.description,
      url: link.url,
      icon: link.icon,
      tags: link.tags.map((tag) => ({ name: tag, url: `/bookmarks/${tag}` })),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
};

export const LinkTags: Tag[] = [...new Set(links.flatMap((link) => link.tags))]
  .map((tag) => ({ name: tag, url: `/bookmarks/${tag}` }))
  .sort((a, b) => a.name.localeCompare(b.name));
