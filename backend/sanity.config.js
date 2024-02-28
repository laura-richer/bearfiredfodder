import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

export default defineConfig({
  name: 'bear-fired-fodder-backend',
  title: 'Bear Fired Fodder',
  projectId: '6f642s5x',
  dataset: 'production',
  plugins: [deskTool(), visionTool(), vercelDeployTool()],
  schema: {
    types: schemaTypes,
  },
})
