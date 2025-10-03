// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PSX',
            logo: {
                src: '/src/assets/bg.webp',
                replacesTitle: false,
            },
            editLink: {
                baseUrl: 'https://github.com/apioo/psx-website/edit/main/',
            },
			social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/apioo/psx-website' },
                { icon: 'discord', label: 'Discord', href: 'https://discord.gg/eMrMgwsc6e' },
            ],
            customCss: ['./src/assets/landing.css'],
			sidebar: [
                { label: 'Get started', slug: 'get-started' },
                {
					label: 'Integration',
                    items: [
                        { label: 'Symfony', slug: 'integration/symfony' },
                        { label: 'Laravel', slug: 'integration/laravel' },
                        { label: 'Custom', slug: 'integration/custom' },
                        { label: 'Framework', slug: 'integration/framework' },
                    ],
				},
                { label: 'Attributes', slug: 'attributes' },
                { label: 'Repositories', slug: 'repositories' },
                {
                    label: 'Components',
                    autogenerate: { directory: 'components' },
                },
			],
		}),
	],
});
