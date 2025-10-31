import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '09li49be',
    dataset: 'production'
  },
  studioHost: 'wanderpanda-blog',
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
