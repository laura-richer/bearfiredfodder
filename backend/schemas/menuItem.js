import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menuItem',
  title: 'Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'ingredient',
      title: 'Ingredients',
      type: 'array',
      of: [{type: 'reference', to: {type: 'ingredient'}}],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'dietaryRequirement',
      title: 'Dietary Requirements',
      type: 'array',
      of: [{type: 'reference', to: {type: 'dietaryRequirement'}}],
    }),

  ],
})
