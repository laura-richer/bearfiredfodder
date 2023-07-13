import { defineField, defineType, defin } from 'sanity'

export default defineType({
  name: 'homePageContent',
  title: 'Home Page',
  type: 'document',
  groups: [
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'about',
      title: 'About',
    },
    {
      name: 'menu',
      title: 'Menu',
    },
    {
      name: 'gallery',
      title: 'Gallery',
    },
    {
      name: 'contact',
      title: 'Contact',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'hero',
    }),
  ],
})
