import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          {title: 'Orange', value: 'orange'},
          {title: 'Blue', value: 'blue'},
          {title: 'Green', value: 'green'},
          {title: 'Purple', value: 'purple'},
          {title: 'Red', value: 'red'},
          {title: 'Yellow', value: 'yellow'},
        ]
      }
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    },
  },
}) 