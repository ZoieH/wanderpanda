import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'}
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike', value: 'strike-through'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
          {
            title: 'Highlight',
            name: 'highlight',
            type: 'object',
            fields: [
              {
                title: 'Color',
                name: 'color',
                type: 'string',
                options: {
                  list: [
                    {title: 'Yellow', value: 'yellow'},
                    {title: 'Green', value: 'green'},
                    {title: 'Blue', value: 'blue'},
                    {title: 'Pink', value: 'pink'},
                  ]
                }
              }
            ]
          }
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        }
      ]
    }),
    defineArrayMember({
      name: 'callout',
      title: 'Callout',
      type: 'object',
      fields: [
        {
          name: 'type',
          title: 'Type',
          type: 'string',
          options: {
            list: [
              {title: 'Info', value: 'info'},
              {title: 'Warning', value: 'warning'},
              {title: 'Success', value: 'success'},
              {title: 'Error', value: 'error'},
            ]
          }
        },
        {
          name: 'text',
          title: 'Text',
          type: 'text',
          rows: 3
        }
      ]
    }),
    defineArrayMember({
      name: 'youtube',
      title: 'YouTube Video',
      type: 'object',
      fields: [
        {
          name: 'url',
          title: 'YouTube URL',
          type: 'url'
        }
      ]
    })
  ],
}) 