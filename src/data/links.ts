const links = [
  {
    name: 'Angular',
    description: 'One framework. Mobile & desktop.',
    url: 'https://angular.io',
    icon: 'https://angular.dev/assets/icons/apple-touch-icon.png',
    tags: ['Frontend', 'Angular'],
  },
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces',
    url: 'https://react.dev',
    icon: 'https://react.dev/favicon-32x32.png',
    tags: ['Frontend', 'React'],
  },
  {
    name: 'Vue',
    description: 'The Progressive JavaScript Framework',
    url: 'https://vuejs.org',
    icon: 'https://vuejs.org/logo.svg',
    tags: ['Frontend', 'Vue'],
  },
  {
    name: 'Node.js',
    description:
      "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    url: 'https://nodejs.org',
    icon: 'https://nodejs.org/static/images/favicons/favicon.png',
    tags: ['Node', 'Runtime'],
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
