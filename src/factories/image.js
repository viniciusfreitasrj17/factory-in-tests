class Image {}
export class PNGImage extends Image {}
export class JPGImage extends Image {}
export class GIFImage extends Image {}

export function createImage(type) {
  const supportedImageTypes = {
    jpg: JPGImage,
    png: PNGImage,
    gif: GIFImage
  }

  if (!supportedImageTypes[type])
    return 'Image is not supported'

  return new (supportedImageTypes[type])()
}
