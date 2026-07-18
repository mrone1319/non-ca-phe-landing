export const socialPost = {
  name: 'socialPost',
  title: 'Social Post',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'Instagram', value: 'instagram' },
          { title: 'Xiaohongshu / 小红书', value: 'xiaohongshu' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'TikTok', value: 'tiktok' },
          { title: 'WeChat / 微信', value: 'wechat' },
          { title: 'Google Reviews', value: 'google' },
          { title: 'Twitter / X', value: 'twitter' },
          { title: 'YouTube', value: 'youtube' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display order',
      description: 'Lower numbers show first.',
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
      title: 'platform',
      media: 'image',
    },
  },
};
