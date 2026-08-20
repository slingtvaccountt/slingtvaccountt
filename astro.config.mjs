// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Sling TV Login',

      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'google-site-verification',
            content: 'bpyG_46Oxb8tkddkShnQUSNXXlLsS3_uprz6BW6X85g',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'msvalidate.01',
            content: 'B807FE4A03DB636D50EF7962DDBBE11F',
          },
        },
      ],

      sidebar: [
        {
          label: 'Sling TV Login',
          items: [
            {
              label: 'Sling TV Login Guide',
              slug: 'sling-tv-login',
            },
          ],
        },
      ],
    }),
  ],
});
