import { client } from './sanity'

// Simple test query
export const testConnection = async () => {
  try {
    const result = await client.fetch('*[_type == "Post"]')
    console.log('All posts (any type):', result)
    
    const allDocs = await client.fetch('*[0...10]')
    console.log('All documents (first 10):', allDocs)
    
    return { success: true, posts: result, allDocs }
  } catch (error) {
    console.error('Connection test failed:', error)
    return { success: false, error }
  }
} 