export interface Project {
  name: string
  description: string
  url: string
  language: string
  stars: number
}

export const projects: Project[] = [
  {
    name: 'dotfiles',
    description: 'My dotfiles',
    url: 'https://github.com/froko/dotfiles',
    language: 'Lua',
    stars: 1,
  },
  {
    name: 'shared-configs',
    description:
      'A MonoRepo with shared configurations for prettier, ESLint and renovate.',
    url: 'https://github.com/froko/shared-configs',
    language: 'JavaScript',
    stars: 0,
  },
  {
    name: 'simple-domain',
    description: 'A framework which supports DDD, CQRS & EventSourcing',
    url: 'https://github.com/froko/simple-domain',
    language: 'C#',
    stars: 0,
  },
  {
    name: 'create-vite-ts',
    description: 'A CLI to bootstrap new vite-based TypeScript projects.',
    url: 'https://github.com/froko/create-vite-ts',
    language: 'TypeScript',
    stars: 0,
  },
]
