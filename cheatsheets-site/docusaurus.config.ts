import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Tooch\s Cheatsheets',
  tagline: 'Quick reference for a unique set of life experiences',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://cheatsheets.tucc.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Cheatsheets-Mirror/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'IronTooch', // Usually your GitHub org/user name.
  projectName: 'cheatsheets', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          routeBasePath:  '/'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Tooch\'s Cheatsheets',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Sheets',
        },
        {
          href: 'https://github.com/IronTooch',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Cheatsheets',
          items: [
            {
              label: 'Home',
              to: '/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/stevenvtuccio/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/IronTooch',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Steve Tuccio. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    sidebar: {
      hideable: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
