// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PSX',
  tagline: 'A modern set of PHP components to simplify API development',
  url: 'https://phpsx.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'apioo', // Usually your GitHub org/user name.
  projectName: 'psx', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/apioo/psx-website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/apioo/psx-website/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-TPY6RQYPSJ',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PSX',
        logo: {
          alt: 'PSX',
          src: 'img/psx_logo_small.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Introduction',
          },
          {
            type: 'doc',
            docId: 'api',
            position: 'left',
            label: 'API',
          },
          {
            type: 'doc',
            docId: 'schema',
            position: 'left',
            label: 'Schema',
          },
          {
            type: 'doc',
            docId: 'data',
            position: 'left',
            label: 'Data',
          },
          {
            type: 'doc',
            docId: 'integration',
            position: 'left',
            label: 'Integration',
          },
          {
            type: 'doc',
            docId: 'components',
            position: 'left',
            label: 'Components',
          },
          {
            href: 'https://github.com/apioo/psx',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'API',
                to: '/docs/api',
              },
              {
                label: 'Schema',
                to: '/docs/schema',
              },
              {
                label: 'Data',
                to: '/docs/data',
              },
              {
                label: 'Integration',
                to: '/docs/integration',
              },
            ],
          },
          {
            title: 'Components',
            items: [
              {
                label: 'API',
                href: 'https://github.com/apioo/psx-api',
              },
              {
                label: 'Schema',
                href: 'https://github.com/apioo/psx-schema',
              },
              {
                label: 'Data',
                href: 'https://github.com/apioo/psx-data',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/apioo/psx',
              },
              {
                label: 'Fusio',
                href: 'https://www.fusio-project.org/',
              },
              {
                label: 'TypeSchema',
                href: 'https://typeschema.org/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/FusioAPI',
              },
              {
                label: 'Packagist',
                href: 'https://packagist.org/packages/psx/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Christoph Kappestein. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php', 'json'],
      },
    }),
};

module.exports = config;
