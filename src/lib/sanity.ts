import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '09li49be', // Get this from your Sanity dashboard
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export const RELATED_POSTS_QUERY = `*[
  _type == "post" 
  && slug.current != $slug
  && count((categories[]->title)[@ in $categories]) > 0
]|order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage,
  "imageUrl": mainImage.asset->url,
  "categories": categories[]->title
}`

// Blog post queries
export const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage,
  "imageUrl": mainImage.asset->url,
  "authorName": author->name,
  "authorImage": author->image.asset->url,
  "categories": categories[]->title,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
}`

export const POST_QUERY = `*[
  _type == "post" 
  && slug.current == $slug
][0]{
  _id,
  title,
  slug,
  publishedAt,
  body,
  excerpt,
  mainImage,
  "imageUrl": mainImage.asset->url,
  "authorName": author->name,
  "authorImage": author->image.asset->url,
  "categories": categories[]->title,
  seo{
    metaTitle,
    metaDescription,
    keywords
  },
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
}` 