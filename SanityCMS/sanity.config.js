import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './src/structures/structure'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['homepage_banner_text', 'upcoming_performances_header', 'contact_page'])

export default defineConfig({
  name: 'default',
  title: 'FF2MM',

  projectId: 'oavoemrl',
  dataset: 'production',

  plugins: [deskTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global "New document" menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
