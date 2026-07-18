export const siteImages = {
  name: 'siteImages',
  title: 'Site Photos',
  type: 'document',
  fields: [
    {
      name: 'heroImage',
      title: 'Hero Photo',
      description: 'Top of the homepage — "Slow-drip coffee, cinematic hero shot".',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'storyImage',
      title: 'Our Journey Photo',
      description: 'In the "Our Story" section — "Founders crafting coffee, polaroid style".',
      type: 'image',
      options: { hotspot: true },
    },
  ],
  preview: {
    prepare() {
      return { title: 'Site Photos' };
    },
  },
};
