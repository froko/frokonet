export interface Band {
  name: string
  url: string
  description?: string
  image: string
}

export const bands: Band[] = [
  {
    name: 'Feldmusik Buttisholz',
    url: 'https://feldmusik-buttisholz.ch/wp/',
    image: '/fmb.jpg',
  },
  {
    name: 'Pilatusgeister Luzern',
    url: 'https://pgl.ch',
    image: '/pgl.webp',
  },
  {
    name: 'suurstOff',
    url: 'https://suurstoff.ch',
    image: '/suurstoff.png',
  },
]
