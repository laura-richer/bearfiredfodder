import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePageContent',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'ingredient',
      title: 'Ingredients',
      type: 'array',
      of: [{type: 'reference', to: {type: 'ingredient'}}],
    }),
    defineField({
      name: 'dietaryRequirement',
      title: 'Dietary Requirements',
      type: 'array',
      of: [{type: 'reference', to: {type: 'dietaryRequirement'}}],
    }),

  ],
})
