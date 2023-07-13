import { defineField, defineType } from 'sanity'

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
      name: 'heroTitle',
      title: 'Title',
      type: 'string',
      group: 'hero',
      default: 'I done make chavvy pizza',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      group: 'hero',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'heroMobileImage',
      title: 'Mobile Image',
      type: 'image',
      group: 'hero',
    }),
    defineField({
      name: 'aboutTitle',
      title: 'Title',
      type: 'string',
      group: 'about',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'aboutCopy',
      title: 'Copy',
      type: 'text',
      group: 'about',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'aboutImage',
      title: 'Image',
      type: 'image',
      group: 'about',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'menuTitle',
      title: 'Title',
      type: 'string',
      group: 'menu',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'menuBackgroundImage',
      title: 'Background Image',
      type: 'image',
      group: 'menu',
    }),
    defineField({
      name: 'galleryTitle',
      title: 'Title',
      type: 'string',
      group: 'gallery',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image' }],
      group: 'gallery',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'contactTitle',
      title: 'Title',
      type: 'string',
      group: 'contact',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'contactDetails',
      title: 'Contact Details',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'contactDetailsFieldGroup',
          fields: [
            { type: 'string', name: 'contactDetailsType', title: 'Contact Type' },
            { type: 'text', name: 'contactDetailsDetail', title: 'Details' }
          ]
        }
      ],
      group: 'contact',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'socialLinks', // TODO make repeater field
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLinksFieldGroup',
          fields: [
            { type: 'string', name: 'socialPlatform', title: 'Platform' },
            { type: 'url', name: 'socialLink', title: 'Link' }
          ]
        }
      ],
      group: 'contact',
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
      group: 'seo',
    })
  ],
})
