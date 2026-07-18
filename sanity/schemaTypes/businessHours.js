const dayField = (name, title) => ({
  name,
  title,
  type: 'object',
  fields: [
    {
      name: 'closed',
      title: 'Closed all day',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'open',
      title: 'Opens at',
      type: 'string',
      description: 'e.g. "10:30 AM"',
      hidden: ({ parent }) => !!parent?.closed,
    },
    {
      name: 'close',
      title: 'Closes at',
      type: 'string',
      description: 'e.g. "6:00 PM"',
      hidden: ({ parent }) => !!parent?.closed,
    },
  ],
  preview: {
    select: { closed: 'closed', open: 'open', close: 'close' },
    prepare({ closed, open, close }) {
      return { title: closed ? 'Closed' : `${open || '?'} – ${close || '?'}` };
    },
  },
});

export const businessHours = {
  name: 'businessHours',
  title: 'Business Hours',
  type: 'document',
  fieldsets: [
    { name: 'week', title: 'Weekly schedule', options: { columns: 1 } },
  ],
  fields: [
    { ...dayField('monday', 'Monday'), fieldset: 'week' },
    { ...dayField('tuesday', 'Tuesday'), fieldset: 'week' },
    { ...dayField('wednesday', 'Wednesday'), fieldset: 'week' },
    { ...dayField('thursday', 'Thursday'), fieldset: 'week' },
    { ...dayField('friday', 'Friday'), fieldset: 'week' },
    { ...dayField('saturday', 'Saturday'), fieldset: 'week' },
    { ...dayField('sunday', 'Sunday'), fieldset: 'week' },
    {
      name: 'announcementEn',
      title: 'Special announcement (English)',
      description:
        'Optional. Shown only when filled in — e.g. "Closed for Chinese New Year, Feb 10–12."',
      type: 'text',
      rows: 2,
    },
    {
      name: 'announcementZh',
      title: 'Special announcement (Chinese)',
      description: 'Optional Chinese translation of the announcement above.',
      type: 'text',
      rows: 2,
    },
  ],
  preview: {
    prepare() {
      return { title: 'Business Hours' };
    },
  },
};
