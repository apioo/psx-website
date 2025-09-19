// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PSX',
  tagline: 'A PHP framework and set of components to build fully typed REST APIs.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://phpsx.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'apioo', // Usually your GitHub org/user name.
  projectName: 'psx', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/apioo/psx-website/edit/main/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
            docId: 'components/api',
            position: 'left',
            label: 'API',
          },
          {
            type: 'doc',
            docId: 'components/schema',
            position: 'left',
            label: 'Schema',
          },
          {
            type: 'doc',
            docId: 'components/data',
            position: 'left',
            label: 'Data',
          },
          {
            type: 'doc',
            docId: 'components/sql',
            position: 'left',
            label: 'SQL',
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
                to: '/docs/components/api',
              },
              {
                label: 'Schema',
                to: '/docs/components/schema',
              },
              {
                label: 'Data',
                to: '/docs/components/data',
              },
              {
                label: 'SQL',
                to: '/docs/components/sql',
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
              {
                label: 'SQL',
                href: 'https://github.com/apioo/psx-sql',
              },
              {
                label: 'Packagist',
                href: 'https://packagist.org/packages/psx/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/eMrMgwsc6e',
              },
              {
                label: 'Contact',
                href: 'https://www.fusio-project.org/contact',
              },
              {
                label: 'Fusio',
                href: 'https://www.fusio-project.org/',
              },
              {
                label: 'TypeAPI',
                href: 'https://typeapi.org/',
              },
              {
                label: 'TypeSchema',
                href: 'https://typeschema.org/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/FusioAPI',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Christoph Kappestein. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php', 'json'],
      },
    }),
};

export default config;
