// Lista de imagens já existentes no projeto para uso como placeholder
// Todas as URLs referenciam a pasta `public/`, acessíveis via caminho absoluto
export const PLACEHOLDER_IMAGES = [
  '/images-home/image1.png',
  '/images-home/image2.png',
  '/images-home/image3.png',
  '/images-home/image4.png',
  '/images-home/image5.png',
  '/fallback.svg',
]

export function getRandomPlaceholderImage() {
  const index = Math.floor(Math.random() * PLACEHOLDER_IMAGES.length)
  return PLACEHOLDER_IMAGES[index]
}