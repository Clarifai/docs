// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer')
const path = require('path');
const redirects = require("./redirects.json");

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Clarifai Docs',
  tagline: 'Clarifai Docs',
  url: 'https://docs.clarifai.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
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
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/Clarifai/docs/blob/main/${versionDocsDirPath}/${docPath}`,
          docItemComponent: require.resolve('./src/components/CustomDocItem/index.js'),
          docCategoryGeneratedIndexComponent: require.resolve('./src/components/CustomDocCategory/index.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleTagManager: {
          containerId: "GTM-5W9P7GR"
        },
        gtag: {
          trackingID: 'G-3R20NHSS5H',
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
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          // Pass it a path to a local OpenAPI YAML file
          {
            // Redocusaurus will automatically bundle your spec into a single file during the build
            spec: 'static/api-spec/clarifai-v3.json',
            route: '/api-reference',
          },
        ],
        theme: {
          // Change with your site colors
          primaryColor: '#a5b4fc',
        },
        config: path.join(__dirname, 'redocly.yaml'),
      },
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'E9LMD97ZH2',
        apiKey: 'bb83e0130652ea667b2a9fd12ddb974b',
        indexName: 'clarifai',
        insights: true, // Optional, automatically send insights when user interacts with search results    
        container: 'div',
        debug: false // Set debug to true if you want to inspect the modal

      },
      announcementBar: {
        id: 'support_us_' + Date.now(),
        content:
          '<span>New!</span> Introducing the AI Playground — Your LLM Battleground to Test Powerful AI Models! <a target="_blank" rel="noopener noreferrer" href="https://clarifai.com/playground?model=Qwen2_5-VL-7B-Instruct">Try Now</a>',
        isCloseable: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Clarifai Docs',
          src: 'img/logo-dark.svg',
          srcDark: 'img/logo-light.svg',
          href: '/',
        },
        items: [     
          {
            type: "dropdown",
            label: "API References",
            position: "left",
            items: [
              {
                label: "Python SDK Reference",
                to: "/resources/api-references/python",
              },
              {
                label: "Node.js SDK Reference",
                to: "/resources/api-references/node/"
              }, 
              {
                label: "Postman API Reference",
                href: "https://documenter.getpostman.com/view/30622694/2s9YkuZdro"
              },
              {
                label: "Swagger API Reference",
                href: "https://api.clarifai.com/api-doc/?url=https://api.clarifai.com/v2/swagger.json"
              }
            ]
          }, 
          {
            type: 'search',
            position: 'right',
          },
          
          {
            href: 'https://github.com/Clarifai/docs',
            className: "header-github-link",
            position: 'right',
            'aria-label': 'Github repository'
          },
          {
            href: 'https://discord.gg/WgUvPK4pVD',
            className: 'header-discord-link',
            position: 'right',
            'aria-label': 'Discord'
          },
          {
            href: 'https://x.com/clarifai',
            className: 'header-x-link',
            position: 'right',
            'aria-label': 'X'
          },
          {
            href: 'https://www.linkedin.com/company/clarifai/',
            className: 'header-linkedin-link',
            position: 'right',
            'aria-label': 'LinkedIn'
          }, 
          {
            label: 'Login',
            href: "https://clarifai.com/login?__hstc=56460205.941fd3bdff0d161c2f70ccba4c9dcb6b.1707280236564.1715406292479.1715409915530.11&__hssc=56460205.1.1715409915530&__hsfp=1566939966",
            className: 'login-link',
            position: 'right',
            'aria-label': 'Login'
          },
          {
            label: 'Start for free',
            href: "https://clarifai.com/signup?__hstc=56460205.941fd3bdff0d161c2f70ccba4c9dcb6b.1707280236564.1715406292479.1715409915530.11&__hssc=56460205.1.1715409915530&__hsfp=1566939966",
            className: 'signup-button',
            position: 'right',
            'aria-label': 'Start for free'
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
        // Issue with docusaurus & Redocusaurus on loading the code theme
        // Reference: https://github.com/PrismJS/prism/issues/3458#issuecomment-1134426181
        additionalLanguages: ['php', 'java', 'csharp', 'objectivec', 'bash', 'scala'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true
        }
      }
    }),
  plugins: [  
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects,
      },
    ],
  ],
  scripts: [
    {
      src: "/scripts/sidebar.js",
      async: true,
    },
    {
      src: "/scripts/intercomConfig.js",
      async: true,
    }
  ],
};

module.exports = config;
