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
      name: 'codeLink',
      title: 'Code Link',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    },
    {
      name: 'projectImage',
      title: 'Image',
      type: 'image',
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
