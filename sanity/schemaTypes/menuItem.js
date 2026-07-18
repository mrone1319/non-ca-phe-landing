export const menuItem = {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    {
      name: 'vietnameseName',
      title: 'Vietnamese Name',
      type: 'string',
      description: 'The authentic Vietnamese name, e.g. "Cà Phê Đen" — shown in both languages.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titleZh',
      title: 'Title (Chinese)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'descEn',
      title: 'Description (English)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'descZh',
      title: 'Description (Chinese)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Traditional Phin Drip / 经典滴漏系列', value: 'phin' },
          { title: 'Handcrafted Specialty / 匠心手作系列', value: 'special' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'signature',
      title: 'Signature item?',
      description: 'Shows a "Signature" badge on the card.',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display order',
      description: 'Lower numbers show first within their category.',
      type: 'number',
      initialValue: 0,
    },
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'titleEn',
      subtitle: 'vietnameseName',
      media: 'image',
    },
  },
};
