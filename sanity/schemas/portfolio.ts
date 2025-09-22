export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'string',
    },
    {
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Web Development', value: 'web' },
          { title: 'SEO', value: 'seo' },
          { title: 'Social Media', value: 'social' },
          { title: 'App Development', value: 'app' },
          { title: 'E-Commerce', value: 'ecommerce' },
          { title: 'Branding', value: 'branding' },
          { title: 'Performance Marketing', value: 'marketing' },
        ],
      },
    },
    {
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      rows: 3,
    },
    {
      name: 'solution',
      title: 'Solution',
      type: 'text',
      rows: 3,
    },
    {
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'metric', type: 'string', title: 'Metric' },
            { name: 'value', type: 'string', title: 'Value' },
            { name: 'change', type: 'string', title: 'Change %' },
          ],
        },
      ],
    },
    {
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'text',
      rows: 3,
    },
    {
      name: 'duration',
      title: 'Project Duration',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'liveUrl',
      title: 'Live Website URL',
      type: 'url',
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Show on homepage',
    },
  ],
}
