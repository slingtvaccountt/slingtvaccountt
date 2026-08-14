import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Sling TV Login',

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