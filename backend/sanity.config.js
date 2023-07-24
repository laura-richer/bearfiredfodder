import { defineConfig } from 'sanity'
import { deskTool} from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'bear-fired-fodder-backend',
  title: 'Bear Fired Fodder',
  projectId: '6f642s5x',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
