export default {
  name: 'experince',
  type: 'document',
  title: 'Experince',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'start',
      title: 'Start',
      type: 'date',
    },
    {
      name: 'end',
      title: 'End',
      type: 'date',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'On-site', value: 'onsite'},
          {title: 'Hybrid', value: 'hybrid'},
          {title: 'Online', value: 'online'},
        ],
      },
    },
  ],
}
