// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Clarifai Guide',
  tagline: 'Clarifai Guide',
  url: 'https://docs.clarifai.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'clarifai',
  projectName: 'docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'UA-115983722-1',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Clarifai Guide',
        logo: {
          alt: 'Clarifai',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/Clarifai/docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://clarifaicommunity.slack.com',
            label: 'Community Slack',
            position: 'right',
          },
          {
            href: 'https://api.clarifai.com/api-doc/?url=https://api.clarifai.com/v2/swagger.json',
            label: 'Swagger API Guide',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'Clarifai Website',
                href: 'https://clarifai.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/clarifai',
              },
              {
                label: 'Slack',
                href: 'https://clarifaicommunity.slack.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/clarifai',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/clarifai',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/Clarifai/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Clarifai, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php', 'java', 'csharp', 'objectivec', 'bash'],
      },
    }),
    plugins: [
    // [
    //   require.resolve('docusaurus-gtm-plugin'),
    //   {
    //     id: 'GTM-PLV65FL', // GTM Container ID
    //   }
    // ],
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
        indexBlog: false,
      },
    ],
  ],
};

module.exports = config;
