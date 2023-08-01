import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'headerNavigation',
  title: 'Header Nav Items',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
})
