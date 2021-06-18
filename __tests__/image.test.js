import { 
  createImage,
  JPGImage,
  PNGImage,
  GIFImage,
} from '../src/factories/image'

describe('Image Factory', () => {

  it('should create an instance of Image given the type is not supported', () => {
    const imageInstance = createImage('bmp')

    expect(imageInstance).toBe('Image is not supported')
  })
  
  it('should create an instance of JPG given the type is jpg', () => {
    const imageInstance = createImage('jpg')

    expect(imageInstance).toBeInstanceOf(JPGImage)
  })

  it('should create an instance of PNG given the type is png', () => {
    const imageInstance = createImage('png')

    expect(imageInstance).toBeInstanceOf(PNGImage)
  })

  it('should create an instance of GIF given the type is gif', () => {
    const imageInstance = createImage('gif')

    expect(imageInstance).toBeInstanceOf(GIFImage)
  })

})