export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'depolymentLink',
      title: 'Deployment Link',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    },

    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      current: '',
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'favourite',
      title: 'Favourite',
      type: 'boolean',
    },
    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'NextJS', value: 'NextJS'},
          {title: 'Sanity', value: 'Sanity'},
          {title: 'React', value: 'ReactJS'},
          {title: 'HTML', value: 'HTML'},
          {title: 'CSS', value: 'CSS'},
          {title: 'Tailwind CSS', value: 'TailwindCSS'},
          {title: 'Javascript', value: 'Javascript'},
        ],
      },
    },
  ],
}
