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
            head: [
                {
                    tag: 'script',
                    content: `
  var _paq = window._paq = window._paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://matomo.apioo.de/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '12']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
          `,
                },
            ],
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
