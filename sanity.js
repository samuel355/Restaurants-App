import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
    projectId: 'vw9ow0qk',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})

const builder = imageUrlBuilder(client)
//Run this to add exception for localhost 3000 CORS Policy
//sanity cors add http://localhost:3000 in sanity folder
export const urlFor = (source) => builder.image(source) 

export default client