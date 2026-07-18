import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Freshness is already controlled by the page's `revalidate` window
  // (see app/page.js) — stacking Sanity's own CDN cache on top just adds
  // an unpredictable extra staleness window after edits.
  useCdn: false,
});
