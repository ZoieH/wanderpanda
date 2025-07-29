import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          {title: 'Editor', value: 'editor'},
          {title: 'Writer', value: 'writer'},
          {title: 'Travel Expert', value: 'travel-expert'},
          {title: 'Digital Nomad', value: 'digital-nomad'},
        ]
      }
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        {name: 'website', type: 'url', title: 'Website'},
        {name: 'twitter', type: 'string', title: 'Twitter Handle'},
        {name: 'instagram', type: 'string', title: 'Instagram Handle'},
        {name: 'linkedin', type: 'url', title: 'LinkedIn URL'},
      ],
      options: {
        collapsible: true,
        collapsed: true
      }
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'role'
    },
  },
}) 