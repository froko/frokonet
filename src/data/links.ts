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
  {
    name: 'Component Party',
    description: 'A web framwork comparison site',
    url: 'https://component-party.dev/',
    icon: 'https://component-party.dev/favicon.png',
    tags: ['Frontend'],
  },
  {
    name: 'Cypress',
    description: 'Test. Automate. Accelerate.',
    url: 'https://www.cypress.io/',
    icon: 'https://www.cypress.io/favicon.svg',
    tags: ['Frontend', 'Testing'],
  },
  {
    name: 'Playwright',
    description: 'Fast and reliable end-to-end testing for modern web apps',
    url: 'https://playwright.dev/',
    icon: 'https://playwright.dev/img/playwright-logo.svg',
    tags: ['Frontend', 'Testing'],
  },
  {
    name: 'ESLint',
    description: 'Find and fix problems in your JavaScript code',
    url: 'https://eslint.org/',
    icon: 'https://eslint.org/icon.svg',
    tags: ['Frontend', 'Code Quality'],
  },
  {
    name: 'Prettier',
    description: 'Opinionated Code Formatter',
    url: 'https://prettier.io/',
    icon: 'https://prettier.io/icon.png',
    tags: ['Frontend', 'Code Quality'],
  },
  {
    name: 'EditorConfig',
    description: 'Maintain consistent coding styles between different editors',
    url: 'https://editorconfig.org/',
    icon: 'https://editorconfig.org/favicon.ico',
    tags: ['Code Quality'],
  },
  {
    name: 'TypeScript',
    description: 'JavaScript with syntax for types.',
    url: 'https://www.typescriptlang.org/',
    icon: 'https://www.typescriptlang.org/icons/icon-96x96.png',
    tags: ['Frontend', 'TypeScript'],
  },
  {
    name: 'Tailwind CSS',
    description:
      'A utility-first CSS framework for rapidly building custom designs.',
    url: 'https://tailwindcss.com/',
    icon: 'https://tailwindcss.com/favicons/favicon-32x32.png',
    tags: ['Frontend', 'Web Design', 'Tailwind CSS'],
  },
  {
    name: 'DaisyUI',
    description: 'The most popular component library for Tailwind CSS',
    url: 'https://daisyui.com/',
    icon: 'https://daisyui.com/favicon.ico',
    tags: ['Frontend', 'Component library', 'Tailwind CSS'],
  },
  {
    name: 'Shadcn',
    description: 'Build your own component library',
    url: 'https://ui.shadcn.com/',
    icon: 'https://ui.shadcn.com/favicon.ico',
    tags: ['Frontend', 'Component library', 'Tailwind CSS', 'React'],
  },
  {
    name: 'Shadcn for Vue',
    description: 'Build your own component library',
    url: 'https://www.shadcn-vue.com/',
    icon: 'https://www.shadcn-vue.com/favicon.ico',
    tags: ['Frontend', 'Component library', 'Tailwind CSS', 'Vue'],
  },
  {
    name: 'Shadcn for Svelte',
    description: 'Build your own component library',
    url: 'https://www.shadcn-svelte.com/',
    icon: 'https://www.shadcn-svelte.com/favicon.ico',
    tags: ['Frontend', 'Component library', 'Tailwind CSS', 'Svelte'],
  },
  {
    name: 'spartan',
    description: 'Cutting-edge tools powering Angular full-stack development',
    url: 'https://www.spartan.ng/',
    icon: 'https://www.spartan.ng/assets/spartan.svg',
    tags: [
      'Frontend',
      'Angular',
      'Fullstack',
      'Tailwind CSS',
      'Component library',
    ],
  },
  {
    name: 'Flowbite',
    description:
      'Build websites even faster with components on top of Tailwind CSS',
    url: 'https://flowbite.com/',
    icon: 'https://flowbite.com/favicon.ico',
    tags: ['Frontend', 'Component library', 'Tailwind CSS'],
  },
  {
    name: 'Angular Material',
    description: 'Material Design components for Angular',
    url: 'https://material.angular.io/',
    icon: 'https://material.angular.io/assets/img/favicons/favicon.ico',
    tags: ['Frontend', 'Angular', 'Component library'],
  },
  {
    name: 'Heroicons',
    description:
      'Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS',
    url: 'https://heroicons.com/',
    icon: 'https://heroicons.com/favicon.ico',
    tags: ['Frontend', 'Icons'],
  },
  {
    name: 'Nx',
    description: 'Smart Monorepos - Fast CI',
    url: 'https://nx.dev/',
    icon: 'https://nx.dev/favicon/favicon.svg',
    tags: ['Frontend', 'Fullstack', 'Monorepo'],
  },
  {
    name: 'UnoCSS',
    description: 'Instant On-demand Atomic CSS Engine',
    url: 'https://unocss.dev/',
    icon: 'https://unocss.dev/favicon.ico',
    tags: ['Frontend', 'Web Design'],
  },
  {
    name: 'Mozilla Developer Network',
    description:
      'Documenting web technologies, including HTML, CSS, and JavaScript',
    url: 'https://developer.mozilla.org/',
    icon: 'https://developer.mozilla.org/favicon-48x48.png',
    tags: ['Frontend', 'Documentation'],
  },
  {
    name: 'Web.dev',
    description: 'Building a bettwer web, together',
    url: 'https://web.dev/',
    icon: 'https://www.gstatic.com/devrel-devsite/prod/vc38a15f5a89ceb3dee5ad4d2d7b57b718d8556c0e3724a12c131a2b9d037d8c7/web/images/favicon.png',
    tags: ['Frontend', 'Documentation'],
  },
  {
    name: 'W3Schools',
    description: "Learn to Code with the world's largest web developer site",
    url: 'https://www.w3schools.com/',
    icon: 'https://www.w3schools.com/favicon.ico',
    tags: ['Frontend', 'Documentation'],
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
    ...link,
    tags: link.tags.map((tag) => ({ name: tag, url: `/bookmarks/${tag}` })),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const LinksWithTag = (tag: string): Link[] => {
  return links
    .filter((link) => link.tags.includes(tag))
    .map((link) => ({
      ...link,
      tags: link.tags.map((tag) => ({ name: tag, url: `/bookmarks/${tag}` })),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
};

export const LinkTags: Tag[] = [...new Set(links.flatMap((link) => link.tags))]
  .map((tag) => ({ name: tag, url: `/bookmarks/${tag}` }))
  .sort((a, b) => a.name.localeCompare(b.name));
