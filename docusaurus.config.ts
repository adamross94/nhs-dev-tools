import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NHS Tools',
  tagline: 'Empowering Innovation with Open Source Technologies',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn', // change from 'throw' to 'warn'
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn', // optional but helps for anchor issues too

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
          routeBasePath: '/', // Set this to '/' to make docs the root of the site
         
        },
        
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '🔧',
      logo: {
        alt: 'My Site Logo',
        src: 'img/nhslogo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'NHS',
          items: [
            {
              label: 'NHS England Data Science',
              href: 'https://nhsengland.github.io/datascience/',
            },
            {
              label: 'NHS England - RAP Community of Practice',
              href: 'https://nhsdigital.github.io/rap-community-of-practice/',
            },
            {
              label: 'NHS Open Analytics - Open Source Healthcare Statistics',
              href: 'https://nhsengland.github.io/open-health-statistics/',
            },
            
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'NHS Python Community',
              href: 'https://nhs-pycom.net/',
            },
            {
              label: 'NHS R Community',
              href: 'https://nhsrcommunity.com/',
            },
            {
              label: 'NHS England Developer Community',
              href: 'https://developer.community.nhs.uk/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Government Analysis Function - Reproducible Analytical Pipelines (RAP) Strategy',
              href: 'https://analysisfunction.civilservice.gov.uk/policy-store/reproducible-analytical-pipelines-strategy/#RAP',
            },
            {
              label: 'Data Saves Lives: Reshaping Health and Social Care with Data',
              href: 'https://www.gov.uk/government/publications/data-saves-lives-reshaping-health-and-social-care-with-data/data-saves-lives-reshaping-health-and-social-care-with-data#data-saves-lives',
            },
            {
              label: 'Better, Broader, Safer: using Health Data for Research and Analysis',
              href: 'https://www.gov.uk/government/publications/better-broader-safer-using-health-data-for-research-and-analysis/better-broader-safer-using-health-data-for-research-and-analysis#BBS',
            },
            
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NHS Dev Tools`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
