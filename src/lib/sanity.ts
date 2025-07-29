import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '09li49be', // Get this from your Sanity dashboard
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
})

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
  "imageUrl": image.asset->url,
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
  "imageUrl": image.asset->url,
  "authorName": author->name,
  "authorImage": author->image.asset->url,
  "categories": categories[]->title,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
}` 