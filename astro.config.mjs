import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	integrations: [
		starlight({
			title: 'Dions Radio',
			// Set English as the default language for this site.
      // defaultLocale: 'en',
      locales: {
        // English docs in `src/content/docs/en/`
        root: {
          label: 'English',
          lang: 'en', // lang is required for root locales
        },
        // Simplified Chinese docs in `src/content/docs/zh-cn/`
        'zh-cn': {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
			social: {
				github: 'https://github.com/dionsradio',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
