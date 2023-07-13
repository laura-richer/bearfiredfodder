import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dietaryRequirement',
  title: 'Dietary Requirements',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
})
