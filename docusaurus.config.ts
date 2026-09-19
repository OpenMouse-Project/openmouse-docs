import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OpenMouse Docs',
  tagline: 'Add your device to OpenMouse',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.openmouse.app',
  baseUrl: '/',

  organizationName: 'OpenMouse-Project',
  projectName: 'openmouse-docs',

  onBrokenLinks: 'throw',

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
          routeBasePath: '/', // docs at site root, no separate landing page needed
          editUrl:
            'https://github.com/OpenMouse-Project/openmouse-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'OpenMouse Docs',
      logo: {
        alt: 'OpenMouse Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Guide',
        },
        {
          href: 'https://openmouse.app',
          label: 'OpenMouse',
          position: 'right',
        },
        {
          href: 'https://github.com/OpenMouse-Project',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'OpenMouse Logo',
        src: 'img/logo.png',
        href: 'https://openmouse.app',
      },
      links: [
        {
          title: 'Guide',
          items: [
            {label: 'Architecture', to: '/architecture'},
            {label: 'Add a Device', to: '/add-a-device/overview'},
            {label: 'Supported Devices', to: '/supported-devices'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'GitHub', href: 'https://github.com/OpenMouse-Project'},
            {label: 'Discord', href: 'https://discord.gg/yxC9jzMdw6'},
            {label: 'X / Twitter', href: 'https://x.com/openmouseapp'},
          ],
        },
        {
          title: 'Legal',
          items: [
            {label: 'Privacy Policy', href: 'https://openmouse.app/privacy.html'},
            {label: 'Terms of Service', href: 'https://openmouse.app/terms.html'},
            {
              label: 'License (AGPL-3.0)',
              href: 'https://github.com/OpenMouse-Project/openmouse-docs/blob/main/LICENSE',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenMouse Project. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'rust'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
