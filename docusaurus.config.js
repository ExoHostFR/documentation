// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation ExoHost',
  tagline: 'Bienvenue sur la doc ExoHost. Ici, vous trouverez tout ce que vous aurez besoin.',
  url: 'https://exohost.fr/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://exohost.fr/assets/img/icon.png',
  organizationName: 'ExoHostFR', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
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
        title: 'ExoHost',
        logo: {
          alt: 'ExoHost - Hébergeur Minecraft, GTA RP, GMOD, ...',
          src: 'https://exohost.fr/assets/img/icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://exohost.fr',
            label: 'Site ExoHost',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Offres',
            items: [
              {
                label: 'Minecraft',
                href: 'https://exohost.fr/store/minecraft',
              },
              {
                label: 'GTA RP',
                href: 'https://exohost.fr/store/gtarp',
              },
              {
                label: 'Node.JS',
                href: 'https://exohost.fr/store/nodejs',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.exohost.fr',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/exohostfr',
              },
              {
                label: 'contact@exohost.fr',
                href: 'mailto:contact@exohost.fr',
              },
            ],
          },
          {
            title: 'Plus',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ExoHostFR/',
              },
              {
                label: 'Site',
                href: 'https://exohost.fr',
              },
              {
                label: 'Panel',
                href: 'https://panel.exohost.fr',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ExoHost. Tous droits réservés.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
