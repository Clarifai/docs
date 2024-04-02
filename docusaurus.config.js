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
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',         
          //this one also works--editUrl: 'https://github.com/Clarifai/docs/blob/main/',
          editUrl: ({versionDocsDirPath, docPath}) =>
            `https://github.com/Clarifai/docs/blob/main/${versionDocsDirPath}/${docPath}`,          
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-EN8LWMPFVR',
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
      algolia:{
        appId: 'E9LMD97ZH2',
        apiKey: 'bb83e0130652ea667b2a9fd12ddb974b',   
        indexName: 'clarifai',    
        insights: true, // Optional, automatically send insights when user interacts with search results    
        container: 'div',    
        debug: false // Set debug to true if you want to inspect the modal

      },
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
            href: 'https://discord.gg/WgUvPK4pVD',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://api.clarifai.com/api-doc/?url=https://api.clarifai.com/v2/swagger.json',
            label: 'Swagger API Guide',
            position: 'right',
          }
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
                href: 'https://join.slack.com/t/clarifaicommunity/shared_invite/zt-1jehqesme-l60djcd3c_4a1eCV~uPUjQ',
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
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-5W9P7GR', // GTM Container ID
      }
    ],
    //[
      //require.resolve("@cmfcmf/docusaurus-search-local"),
      //{
        // Options here
        //indexBlog: false,
     // },
   // ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/nodejs-sdk/installation-guide/modules',
            from: ['/nodejs-sdk/api-reference'],
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/community')) {
            // Redirect from /community/X to /portal-guide/X
            return existingPath.replace('/community', '/portal-guide');
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],
};

module.exports = config;
